import React from "react";
import { arrowUp, discount, robot } from "../assets";
import "../App";

function PaymentMethod() {
  return (
    <div className="flex">
      <div id="paymenent_method">
        <div
          id="discount"
          className="flex  w-fit bg-gradient-to-r from-[#272727] to-[#11101D] border border-[#000000] rounded-lg"
        >
          <img src={discount} alt="" />
          <p className="text-white/70">
            <strong className="text-white">20%</strong> DISCOUNT FOR
            <strong className="text-white"> 1 MONTH</strong> ACCOUNT
          </p>
        </div>

        <div className="flex flex-col relative">
          <h1 className="text-white">The Next</h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA]">
            Generation
          </h1>
          <h1 className="text-white">Payment Method.</h1>
          <div className="flex flex-col justify-center items-center w-36 h-36 border-2 border-[#33BBCF] rounded-[50%] absolute right-0  ">
            <div className="flex justify-center items-center ">
              <p className="text-[#33BBCF]">Get</p>
              <img src={arrowUp} alt="" />
            </div>
            <p className="text-[#33BBCF]">Started</p>
          </div>
          <div className="w-20 h-36 border border-white rounded-[50%] bg-white blur-[100px]  absolute left-[-9.25rem] bottom-[10rem]"></div>
        </div>
        <div>
          <div className="pt-5" id="team-vision">
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={robot} alt="" className="max-h-[450px] max-w-[540px]" />
        <div className="w-0 h-0 border-l-[#214D76] border-l-[100px] border-r-[#BCA5FF] border-r-[100px] border-t-[300px] border-t-[#BCA5FF] blur-[120px]  absolute left-[100px] top-[-25px] "></div>
      </div>
    </div>
  );
}

export default PaymentMethod;
