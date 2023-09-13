import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Link from 'next/link'

const ProductsHome = () => {
  return (
    //<section className='py-16'>
        <Wrapper>
        {/* PRODUCTS - START*/}
        {/* PRODUCTS HEADING - START*/}
        <div className="mb-8">
          <p className="mb-8 text-center text-[#0062f5] text-xs font-bold leading-[15px] tracking-[.1em] ">
          PRODUCTS
          </p>
          <h2 className="text-[32px] leading-10 tracking-[.03em] text-[#212121] font-bold text-center">
          Check What We Have
          </h2>
        </div>
        {/* PRODUCTS HEADING - END*/}

        {/* PRODUCT 3 CARDS - START*/}
        <div className='flex justify-between'>
            <Link className='transition-transform hover:scale-110 duration-700' href="/">
            <div>
                <Image src="/home-product1.png" alt="Product" width={380} height={400} />
                <p className="text-[18px] text-center tracking-[.03em] text-[#212121] font-semibold mt-2 leading-6">Flex Sweatpants</p>
                <p className="text-[19px] text-center tracking-[.03em] text-[#212121] font-semibold mt-2 leading-6">$175</p>
            </div>
            </Link>
            <Link className='hidden md:flex transition-transform hover:scale-110 duration-700' href="/">
            <div>
                <Image src="/home-product2.png" alt="Product" width={380} height={400} />
                <p className="text-[18px] tracking-[.03em] text-[#212121] font-semibold mt-2 leading-6">Flex Sweatpants</p>
                <p className="text-[19px] tracking-[.03em] text-[#212121] font-semibold mt-2 leading-6">$175</p>
            </div>
            </Link>
            <Link className='hidden md:flex transition-transform hover:scale-110 duration-700' href="/">
            <div>
                <Image src="/home-product3.png" alt="Product" width={380} height={400} />
                <p className="text-[18px] tracking-[.03em] text-[#212121] font-semibold mt-2 leading-6">Flex Sweatpants</p>
                <p className="text-[19px] tracking-[.03em] text-[#212121] font-semibold mt-2 leading-6">$175</p>
            </div>
            </Link>
        </div>

        {/* PRODUCT 3 CARDS - START*/}

        {/* PRODUCTS - END*/}
        </Wrapper>
    //</section>
  )
}

export default ProductsHome