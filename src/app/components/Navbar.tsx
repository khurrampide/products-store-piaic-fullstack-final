'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Logo.webp'
import Link from 'next/link'
import {BsCartDash, BsSearch} from 'react-icons/bs'
import Wrapper from './Wrapper'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store';

const Navbar = () => {
    const cartValue = useSelector((state:RootState)=>state.cart.totalQuantity)


  return (
    <Wrapper>
    <div  className=' flex justify-between h-[46px] items-center mt-8 mb-16 '>

        {/* ********* LOGO ********* */}

        <div>
            <Link href="/"> 
                <Image src={Logo} alt="Logo" width={140} />
            </Link>
        </div>

        {/* ********* MENU LINKS ********** */}

        <div className='hidden md:flex gap-[48px] '>
            <Link href="/female">Female</Link>
            <Link href="/male">Male</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/products">All Products</Link>
        </div>

        {/* ********* SEARCH BAR ********* */}

        <div className='hidden md:flex items-center gap-2'>
            <BsSearch/>
            <input className='border border-gray-500 w-[300px] h-7 rounded-md' type="text"  placeholder='Search something...'/>
        </div>

        {/* ********* CART COUNT ********* */}

        <Link href="/cart">
        <div className='bg-[#f1f1f1] relative rounded-full w-[50px] h-[50px] flex items-center justify-center  hover:scale-110 transition-transform duration[100]'>            
            <BsCartDash className='text-xl' />
            <div className='bg-red-700 w-5 h-5 text-white text-sm rounded-full flex justify-center items-center absolute top-1 left-7 '>{cartValue}</div>
        </div>
        </Link>
        {/* <Link href="/cart2">
        <div className='bg-[#817c96] relative rounded-full w-[50px] h-[50px] flex items-center justify-center  hover:scale-110 transition-transform duration[100]'>            
            <BsCartDash className='text-xl' />
            <div className='bg-red-700 w-5 h-5 text-white text-sm rounded-full flex justify-center items-center absolute top-1 left-7 '>{cartValue}</div>
        </div>
        </Link> */}
    </div>
    </Wrapper>
  )
}

export default Navbar