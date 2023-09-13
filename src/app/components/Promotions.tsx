import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Promotions = () => {
  return (
   // <section className="py-20" >
      <Wrapper>
        <div className="py-20">
        {/* PROMOTION HEADING - START */}
        <div className="mb-8">
          <p className="mb-8 text-center text-[#0062f5] text-xs font-bold leading-[15px] tracking-[.1em] ">
            PROMOTIONS
          </p>
          <h2 className="text-[32px] leading-10 tracking-[.03em] text-[#212121] font-bold text-center">
            Our Promotions Events
          </h2>
        </div>
      {/* PROMOTION HEADING - END */}

        {/* MAIN PROMOTION WITH IMAGES - START */}
        <div className="flex flex-col md:grid grid-cols-2 gap-4">

          {/* ****************************** FIRST COLUMN ***************************************/}
          
          <div className="mr-8">
            
            {/* FIRST COLUMN */}
            <div className=" md:flex bg-[#d6d6d8] mb-4">
              {/* FIRST COLUMN - LEFT TEXT -  - GET UP TO 60%  */}
              <div className="flex flex-col items-center justify-center mx-8 " >
                <h3 className="font-bold text-[28px] leading-9">
                  GET UP TO{" "}
                  <span className="font-extrabold text-4xl leading-[45px]">
                    60%
                  </span>
                </h3>
                <p className="font-normal text-xl leading-[23px] tracking-[.03em]">
                  For the summer season
                </p>
              </div>
              {/* FIRST COLUMN - RIGHT IMAGE - Get upto 30% off */}
              <div>
                <Image
                  src="/promotion/60percentoff.webp"
                  width={260}
                  height={200} alt="Promotion"
                />
              </div>
            </div>
            {/* FIRST COLUMN PART 2 */}
            <div className="bg-[#212121] flex flex-col items-center px-8 pt-12 pb-8">
              <h3 className=" 
                text-[#fff]
                font-extrabold
                text-4xl
                leading-[45px];
                tracking-[.03em];
                mb-4"
              > GET 30% Off </h3>
              <p className="text-[#fff] 
                  font-normal
                  text-[.875rem]
                  leading-[18px]
                  tracking-[.03em]">USE PROMO CODE</p>
              <button className=" 
                  cursor-pointer
                  font-bold
                  text-[17px]
                  leading-[21px]
                  tracking-[.25em]
                  text-white
                  bg-[#474747]
                  py-2 px-10
                  padding: .5rem 2.5rem;
                  mt-[5px]
                  rounded-lg "
              >DINEWEEKENDSALE</button>
            </div>
          </div>

          {/* ****************************** SECOND COLUMN ***************************************/}

          <div className="flex flex-col md:flex md:flex-row gap-4">
            {/* SECOND COLUMN A */}
            <div className="flex flex-col justify-between pt-6 bg-[#efe1c7] "> 
            <div className="ml-6">
              <div >Flex Sweatshirt</div>
              <div>
                <span className="text-base line-through">$100.00</span>
                <span className="text-lg font-extrabold ml-[10px] leading-[23px]">$75.00</span>
              </div>
            </div>
            <Image
                  src="/promotion/promotion-1.webp"
                  width={260}
                  height={200} alt="Promotion"
                /></div>
            {/* SECOND COLUMN B */}
              <div className="bg-[#d7d7d9] flex flex-col justify-between pt-6 "> 
              <div className="ml-6">
              <div >Flex Sweatshirt</div>
              <div>
                <span className="text-base line-through">$225.00</span>
                <span className="text-lg font-extrabold ml-[10px] leading-[23px]">$190.00</span>
              </div>
            </div>
                <Image
                    src="/promotion/promotion-2.webp"
                    width={260}
                    height={200} alt="Promotion"
                  />
              </div>
          </div>

        </div>
        {/* MAIN PROMOTION WITH IMAGES - START */}



        
        </div>
      </Wrapper>
//    </section>
  );
};

export default Promotions;
