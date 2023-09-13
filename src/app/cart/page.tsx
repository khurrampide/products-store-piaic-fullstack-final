"use client";
import React from "react";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { client } from "@/../../sanity/lib/sanityClients";
import { urlForImage } from '@/../sanity/lib/image'
import { ConsoleLogWriter } from "drizzle-orm";
import getStipePromise from "../lib/stripe";
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'


// const products = [
//   {
//     product: 1,
//     name: "Stripe Product",
//     price: 400,
//     quantity: 3,
//   },
//   {
//     product: 2,
//     name: "Stripe Product2",
//     price: 40,
//     quantity: 2,
//   },
//   {
//     product: 3,
//     name: "Stripe Product23",
//     price: 4000,
//     quantity: 1,
//   },
// ];

interface cartfetchedData {
  id: number;
  user_id : string,
  product_id : string,
  quantity : number,
  productData?: any;
}

const getProductData = async (product_id: string): Promise<any> => {
  const res = await client.fetch(`*[_type=='product' && _id == "${product_id}"]{
    title,type,
      _id, price,image,slug,
      category ->{
        name
      }
  }`);
  return res[0];
};

const ShoppingCart = () => {
  // const result = handleAddToCart();
  // console.log("result",result)
  const dispatch = useDispatch()
  const [count, setCount] = useState(12)
  const [dbData, setDbData] = useState<cartfetchedData[]>([]);
  const [userIdCookie, setUserIdCookie] = useState('');

  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(dbData),
      //body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  const incrementCount = ()=>{
    setCount(count+1)
}

const decrementCount = ()=>{
  setCount(count-1)
}

const handleDelete = async (productId: string) => {
  try {
    // Find the item to be deleted
    console.log("Delete Called ",productId)
    const itemToDelete = dbData.find((item) => item.product_id === productId);

    if (itemToDelete) {
      const res = await fetch(`/api/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = await res.json();
      console.log(data.message);

      // Remove the deleted item from the state
      dispatch(cartActions.removeFromCart({quantity:1}))
      setDbData((prevData) => prevData.filter((item) => item.product_id !== productId));     

    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

useEffect(() => {
  // Get data for specific user by using Cookie-ID
  const getCookieByName = (name:string) => {
    const cookieArray = document.cookie.split(';');
    for (const cookie of cookieArray) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return '';
  };

  // Get the "user_id" cookie when the component mounts
  const userId = getCookieByName('user_id');
  setUserIdCookie(userId);
  console.log("USER ID:", userId)

// GET PRODUCT DATA
  const fetchData = async () => {
    const res = await fetch(`/api/cart/${userId}`);
    const data = await res.json();

    const updatedData = await Promise.all(
      data.map(async (item:any) => {
        const productData = await getProductData(item.product_id);
        console.log("PD: ",productData)
        return { ...item, productData };
      })
    );

    setDbData(updatedData);
    //console.log("res",res)
    //console.log("DATA",data)

  };

  fetchData();
}, [userIdCookie]);
  console.log("data", dbData);

  return (
    <>
    {/* <div className="text-2xl font-bold mx-auto">Shopping Cart</div> */}
    <Wrapper>
      <div className="">

      {dbData.map((item,i) => (      
      <div className="p-12">        
        <div className="grid grid-cols-1 md:flex gap-16  ">
          {/* CARD LEFT SIDE */}
          <div className="grid grid-col-1 md:flex gap-8 mt-8  ">
            {/* CARD IMAGE */}
            <div>
              <Image
                className="rounded-lg"
                src={urlForImage(item.productData.image).url()}
                alt=""
                width={154}
                height={190}
              />
            </div>
            {/* CARD DETAILS */}
            <div className="flex flex-col justify-between gap-4">
              <div className="flex justify-between items-center ">
                <div className="font-light text-[1.3rem] leading-[25px] text-[#212121] md:pr-[150px]">
                {item.productData.title}
                </div>
                <div>
                  <RiDeleteBin6Line className="text-xl" onClick={() => handleDelete(item.product_id)} />
                </div>
              </div>
              <div className="leading-16px text-[#666] font-semibold text-base">
                Dress
              </div>
              <div className="font-semibold text-base leading-[22px] text-[#212121]">
                Delivery Estimation
              </div>
              <div className="text-[#ffc700] font-semibold text-base leading-[22px]">
                5 Working Days
              </div>
              <div className="flex justify-between">
                <div className="font-bold text-[1.1rem] leading-5 tracking-[.1em] text-[#212121]">
                ${item.productData.price}
                </div>
                <div className="flex">
                <button onClick={decrementCount} className="bg-green-200 flex w-9 h-9 rounded-full justify-center items-center text-lg font-bold gr-[10px]  hover:cursor-pointer transition-transform  hover:scale-110 duration-200">-</button>
                  <span  className=" flex w-9 h-9 rounded-full justify-center items-center text-lg  gr-[10px]">
                    {count}
                  </span>
                  <button onClick={incrementCount} className="bg-green-200 flex w-9 h-9 rounded-full justify-center items-center text-lg font-bold gr-[10px]  hover:cursor-pointer transition-transform  hover:scale-110 duration-200">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="flex flex-col gap-8 p-8 ">
            <h3 className="text-[19px] font-bold">Order Summary</h3>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div>1 Product</div>
            </div>
            <div className="flex justify-between">
              <div>Sub Total</div>
              <div>$225</div>
            </div>

          </div>
        </div>
      </div>
      ))}
      
      {
        
  count ? (
    <div className="">
      <button onClick={handleCheckout} className="flex justify-center items-center gap-2 text-[.875rem] px-[10px] font-semibold leading-[18px] border-2 border-black bg-[#212121] text-white py-[10px]">
        Proceed to Checkout
      </button>
    </div>
  ) : null
}

      </div>
    </Wrapper>
    </>
  );
};

export default ShoppingCart;
