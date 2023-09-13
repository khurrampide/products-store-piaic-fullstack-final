'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Image as IImage} from "sanity";
import { urlForImage } from '../../../sanity/lib/image';
import AddtoCart from './AddtoCart';
import { useDispatch } from 'react-redux'
import { cartActions } from '@/store/slice/cartSlice'

interface IProd{
  title:string;
  type:string;
  slug:{
    current: string;
    _type: string;
  }
  id:string;
  price:number;
  image:IImage;
}

const ProductCard = ({ title, id, price, image, slug, type }: IProd) => {
  const dispatch = useDispatch()
  
  const handleAddToCart = async ()=>{
 
    dispatch(cartActions.addtoCart({quantity:1}))

    console.log("ONCLICK")
    try{
      const resGet = await fetch("/api/cart",{
        method: "GET"
      })


      console.log("Before Get")
      
      const result2 = await resGet.json();
      console.log(result2)
      // result2.map((r2)=>{
      //   console.log(r2)
      // })

      console.log("After Get")
      const res = await fetch("/api/cart",{
        method: "POST",
        body: JSON.stringify({
          product_id: id,

        })
      })

      if (!res.ok) {
        throw new Error("Failed to add to cart");
      }

      const result = await res.json();
      console.log(result);
    }catch (error) {
      console.error("Error:", error);
    }

  }

  return (
    // CARD START
    <>
    <div className='flex flex-col transition-transform duration-700'>

      {/* LINK WITH SLUG TO CARD */}
    <Link href={`/products/${slug.current}`}>

      {/* CARD START */}
    <div className='' >              
        <Image src={urlForImage(image).url()} width={250} height={266} alt='Products' />
        <p className='text-base mt-2 font-semibold leading-6 tracking-[.03em] text-[#212121]'>{title}</p>
        <p className='text-[15px] mt-2 font-semibold leading-[15px] text-[#888]'>{type}</p>
        <p className='text-xl mt-4 font-semibold leading-6 tracking-[.03em] text-[#212121]'>${price}</p>    
        
    </div>
    {/* CARD END */}

    </Link>
        {/* <AddtoCart/> */}
        <button onClick={()=>handleAddToCart()} className='border mr-32 hover:scale-90  transition-transform rounded-md mt-4 bg-blue-900 text-white px-3 py-2'>Add to Cart</button>
        </div>
    </>
    // CARD END
  )
}

export default ProductCard