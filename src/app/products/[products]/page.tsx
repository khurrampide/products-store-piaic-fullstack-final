import { client } from "../../../../sanity/lib/sanityClients";
import { urlForImage } from '@/../sanity/lib/image'
import React from 'react'
import Wrapper from '../../components/Wrapper'
import Image from 'next/image'
import { BsCartDash } from 'react-icons/bs'
import { Image as IImage } from "sanity";
import AddtoCart from "@/app/components/AddtoCart";
// import { useDispatch } from 'react-redux'
// import { cartActions } from '@/store/slice/cartSlice'

const getProductDetailDB = async (product: string) => {
  

  const query = `*[_type=='product' && slug.current=='` + product + `'] {
    title,
      _id, price,image,slug,
      category ->{
        name
      }
  }`

  const res = client.fetch(query);
  return res;
};

interface IProd {
  title: string;
  slug: {
    current: string,
    _type: string
  }
  _id: string;
  price: number;
  image: IImage;
  category: string;
}

const ProductDetail = async ({ params }: any) => {
  // const dispatch = useDispatch()
  // const addItem = ()=> {
  //   dispatch(cartActions.addtoCart({quantity:1}))
  // }
  const { products } = params
  const data: IProd[] = await getProductDetailDB(products)
  const { title, _id, price, image, slug } = data[0]

  return (
    <section className=' py-8'>
      <Wrapper>
        {/* PRODUCT IMAGE & DETAIL START */}
        <div className='flex  '>
          {/* IMAGE SECTION */}
          <div className='flex gap-8'>
            {/* SMALL IMAGE */}
            <div>
              <Image src={urlForImage(image).url()} width={100} height={100} alt="Image" />
            </div>
            {/* LARGE IMAGE */}
            <div>
              <Image src={urlForImage(image).url()} width={582} height={625} alt="Image" />
            </div>
          </div>

          {/* ************************** */}
          {/* PRODUCT DETAIN MAIN */}
          {/* ************************** */}

          <div className='flex flex-col gap-10 mt-16 ml-4'>
            {/* PRODUCT NAME & CATEGORY - START */}
            <div>
              <h3 className='font-normal text-[1.625rem] leading-[33px] tracking-[.05em] text-[#212121]'>{title}</h3>
              <span className='font-semibold text-[21px] text-black/[.3]' >Jackets</span>
            </div>
            {/* PRODUCT NAME & CATEGORY - END */}

            {/* SIZES */}
            <div>
              <p className='text-[#212121] font-bold leading-4 tracking-[.05em]'>SELECT SIZE</p>
              <ul className='flex gap-4 mt-4'>
                <li className='w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-[.05em] hover:shadow-xl '>XS</li>
                <li className='w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-[.05em] hover:shadow-xl '>S</li>
                <li className='w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-[.05em] hover:shadow-xl '>M</li>
                <li className='w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-[.05em] hover:shadow-xl '>L</li>
                <li className='w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-[.05em] hover:shadow-xl '>XL</li>
              </ul>
            </div>
            {/* QUANTITY */}
            <div className='flex gap-8 items-center '>
              <h4 className='text-base font-bold'>Quantity:</h4>
              <div className='flex'>
                <span className='bg-gray-200 flex w-9 h-9 rounded-full justify-center items-center text-lg font-bold gr-[10px] hover:cursor-pointer transition-transform  hover:scale-110 duration-200'>-</span>
                <span className=' flex w-9 h-9 rounded-full justify-center items-center text-lg  gr-[10px]'>1</span>
                <span className='bg-gray-200 flex w-9 h-9 rounded-full justify-center items-center text-lg font-bold gr-[10px]  hover:cursor-pointer transition-transform  hover:scale-110 duration-200'>+</span>

              </div>
            </div>
            {/* ADD TO CART & PRICE*/}
            <div className='flex gap-4 items-center'>
              <AddtoCart/>
              {/* <button  className=' flex justify-center items-center gap-2 text-base  font-semibold leading-[18px]  border-2  border-black  bg-[#212121] text-white py-2 px-4 '>
                <BsCartDash className='w-[20px] h-[26px]' /> Add to Cart
              </button> */}
              <p className='font-bold text-2xl leading-[30px] tracking-[.1em] text-[#212121]'>${price}</p>
            </div>

          </div>

        </div>

        {/* PRODUCT DESCRIPTION DETAILS */}
        <div className='flex flex-col mt-16 gap-8 pt-[2rem] pb-[6rem] pr-[4rem] pl-[4rem]  relative'>

          {/* Product Information */}
          <div className=' relative h-[150px] border-b-2 border-[#c4c4c4]'>
            <div className='font-extrabold text-[7.5rem] leading-[151px] text-[#f2f3f7] absolute z-0'>Overview</div>
            <h2 className='font-bold text-[1.4rem] leading-[25px] tracking[.05em] text-[#212121] pb-[3rem] absolute z-20 top-[45%]'>Product Information</h2>
          </div>

          {/* PRODUCT DETAILS */}
          <div className='flex'>
            <h4 className=' font-bold text-base leading-[19px] tracking-[.05em] text-[#666] mr-[200px] '>PRODUCT DETAILS</h4>
            <p className='font-light text-base leading-[26px] text-justify tracking-[.05em] text-[#212121]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className='flex'>
            <h4 className=' font-bold text-base leading-[19px] tracking-[.05em] text-[#666] mr-[163px] '>PRODUCT CARE</h4>
            <ul>
              <li className='list-disc font-semibold text-base leading-[26px] tracking-[.05em] text-[#212121]'>Hand wash using cold water.</li>
              <li className='list-disc font-semibold text-base leading-[26px] tracking-[.05em] text-[#212121]'>Do not using bleach.</li>
              <li className='list-disc font-semibold text-base leading-[26px] tracking-[.05em] text-[#212121]'>Hang it to dry.</li>
              <li className='list-disc font-semibold text-base leading-[26px] tracking-[.05em] text-[#212121]'>Iron on low temperature.</li>
            </ul>

          </div>

        </div>
      </Wrapper>

    </section>
  )
}

export default ProductDetail