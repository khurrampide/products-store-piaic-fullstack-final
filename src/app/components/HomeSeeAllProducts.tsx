import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const HomeSeeAllProducts = () => {
  return (
    <section className="">

      {/* HEADING - START */}
      <div className="">
        <Wrapper>
          <div className=" flex md:justify-end pb-8 ">
            <h1 className="font-bold text-[48px] leading-[55px] tracking-[.03em] text-[#212121] w-[45%]">
              Unique and Authentic Vintage Designer Jewellery
            </h1>
          </div>
        </Wrapper>
      </div>
      {/* HEADING - END */}

      {/* MAIN CONTENT - START */}
      <div className=" bg-gray-100 pb-16">
        <Wrapper>
          <div className="flex flex-col  md:grid md:grid-cols-2">
            {/* LEFT SIDE - START */}
            <div className="grid grid-cols-2 justify-center items-center relative">
              <div className="z-0 font-extrabold text-[6.87rem] text-[#212121]/[.07] leading-[110px] absolute ">Different from others</div>
              {/* FIRST */}
              <div className="w-[70%] z-10">
                <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              {/* SECOND */}
              <div className="w-[70%] z-10">
                <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              {/* THIRD */}
              <div className="w-[70%] z-10">
                <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              {/* FOURTH */}
              <div className="w-[70%] z-10">
                <h3 className="
                                font-semibold
                                text-lg
                                leading-5
                                tracking-[.03em]
                                text-[#212121]
                                mb-4
                                ">Using Good Quality Materials</h3>
                <p className="
                            font-light
                            text-base
                            leading-[22px]
                            tracking-[.05em]
                            text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>


            </div>
            {/* LEFT SIDE - END */}


            {/* RIGHT SIDE - START */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              {/* IMAGE */}
              <div>
                <Image
                  src="/featured-home.webp"
                  width={285}
                  height={350} alt="Promotion"
                />
              </div>

              {/* TEXT */}
              <div className="max-w-[222px] gap-8 flex flex-col">
                <p className="text-justify">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <a href="/products">
                  <button className=' flex justify-center items-center gap-2 text-[.875rem]  w-[50%] font-semibold leading-[18px] border-2  border-black  bg-[#212121] text-white py-[10px]'>
                    See All Products
                  </button>
                </a>
              </div>
              {/* TEXT - END */}
            </div>
            {/* RIGHT SIDE - END */}

          </div>
         </Wrapper>    
      </div> 

      {/* MAIN CONTENT - END */}

    </section>
  );
};

export default HomeSeeAllProducts;
