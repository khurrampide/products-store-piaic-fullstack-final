import React from 'react'
import Wrapper from './Wrapper'
import {BsCartDash} from 'react-icons/bs'
import Image from 'next/image'

const Hero = () => {
  return (
    <Wrapper>
    <div className='flex flex-col md:grid grid-cols-2 ' >

  {/* ******************** Hero Left Column Start **********************************
      ****************************************************** */}

        {/* Hero Left Column Start*/}
        <div className='flex flex-col pt-12 pb-4 gap-8'>
            <div className='bg-[#e1edff] w-[120px] h-10 flex items-center justify-center font-semibold text-[#0000ff] rounded-md'>Sale 70%</div>

            {/* HERO SECTION HEADING START */}
            <h1 className='max-w-[448px] text-[54px] text-[#212121] tracking-[.03em] leading-[55px] font-bold'>An Industrial Take on Streetwears</h1>
            {/* HERO SECTION HEADING END */}

            {/* HERO SECTION SUB-HEADING START */}
            <p className='font-normal text-base leading-6 text-[#666] max-w-[70%]'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            {/* HERO SECTION SUB-HEADING END */}

            {/* SHOPPING CART BUTTON START */}
            <button className=' flex justify-center items-center gap-2 text-base w-[80%] md:w-[35%] font-semibold leading-[18px] h-[52px] border-2  border-black  bg-[#212121] text-white p-4'>
            <BsCartDash className='w-[20px] h-[26px]'/> Start Shopping            
            </button>
            {/* SHOPPING CART BUTTON END */}

            {/* BRAND NAMES START */}
            <div className='grid grid-cols-2 md:flex gap-4'>
              <Image src="/bazaar.webp" alt="Bazaar" width={100} height={35} />
              <Image src="/bustle.webp" alt="Bustle" width={100} height={35} />
              <Image src="/versace.webp" alt="Versace" width={100} height={35} />
              <Image src="/instyle.webp" alt="Instyle" width={100} height={35} />
            </div>
            {/* BRAND NAMES END */}
        </div>

  {/* ********************* Hero Right Column Start - PICTURE & CIRCLE *********************************
      ****************************************************** */}

        <div className='hidden md:flex bg-[#FFECE3] rounded-full'>
        <Image src="/hero-sec-picture.webp" alt="Bazaar" width={650} height={650} />
        {/* <Image className='-mt-[30px] -mr-[69px]' src="/hero-sec-picture.png" alt="Bazaar" width={700} height={700} /> */}
          </div>
        {/* Hero Right Column END*/}
    </div>
    </Wrapper>
  )
}

export default Hero