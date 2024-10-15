import React from "react";
import logo from '../../assets/bkash.svg'

const Preloader = () => {
  return (
    <div className=" popup-container sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-1/4 mx-auto border flex justify-center items-center "style={{backgroundColor:'#ff006e'}}>
      <div>
       <div className="flex justify-center items-center">
         <p className="text-xl text-white mt-4">বি<span className="text-gray-900">কাশ</span> </p>
         <img src={logo} className="h-16 w-16" alt=""/>
       </div>
      </div>
    </div>
  );
};

export default Preloader;