import React from 'react'
import Wrapper from './Wrapper'

const HomeSubscribe = () => {
  return (
 //   <section>
        <Wrapper>
            <div className='flex flex-col justify-center items-center py-40 relative '>
            <div className="absolute font-extrabold text-[7.5rem] leading-[151px] text-gray-100 z-0">Newsletter</div>
                <h1 className='text-center md mb-4 font-bold text-[32px] leading-10 tracking-[.03em] text-[#212121]z-10'>Subscribe Our Newsletter</h1>
                <p className='text-center mb-8 font-light text-base leading-[26px] text-[#212121] z-10'>Get the latest information and promo offers directly</p>
                <form className='z-10 flex-col md:flex-row'>
                    <input className='mb-4 border border-[#808080] py-[6px] pl-5 pr-[120px] z-10' type="email" placeholder="Input email address"/>
                    <button className='py-[10px] px-5  bg-black font-semibold text-[.9rem] leading-4 text-white z-10' type="submit">Get Started</button>
                    </form>
            </div>
        </Wrapper>
  //  </section>
  )
}

export default HomeSubscribe