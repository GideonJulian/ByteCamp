import React from "react";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img5.png";

const Home = () => {
  return (
    <div>
      <div className="md:w-[700px] md:space-y-8 md:grid place-items-center m-auto mt-5 relative">
        {/* Images for small screens */}
        <div className="md:hidden flex flex-col mt-8 justify-center space-x-4">
          <img src={img2} className="w-52" alt="Image 2" />
          {/* <img src={img3} className="w-[50px]" alt="Image 3" /> */}
        </div>

        {/* Images for medium and larger screens */}
        <div className="hidden md:block">
          <img
            src={img2}
            className="w-[300.06px] absolute left-[-250px] top-[100px]"
            alt="Image 2"
          />
        </div>
        <img
          src={img3}
          className="w-[370.66px] hidden md:block absolute right-[-300px] top-[60px]"
          alt="Image 3"
        />

        {/* Main content */}
        <div className="relative z-10 text-center">
          <h1 className="text-[30px] md:text-[48px] font-bold md:leading-[55px] leading-[30px] text-[#1e1e1e]">
            Unlock your potential with{" "}
            <span className="text-purple-500">ByteCamp</span>
          </h1>
          <p className="mt-2 md:mt-[10px] text-[12px] md:text-[17px] font-semibold text-[#282727] md:leading-[22px] leading-[16px] md:w-[505px] w-[311px] m-auto">
            Welcome to the future of education! ByteCamp is designed to empower
            learners of all levels, equipping them with the skills and knowledge
            needed to excel.
          </p>
          <button className="px-4 py-2 bg-purple-500 rounded-lg text-white font-semibold mt-10 ">
            Join the wailist
          </button>
          <div className="flex justify-center gap-5 mt-4">
            <i class="bi bi-facebook text-[24px]"></i>

            <i class="bi bi-linkedin text-[24px]"></i>

            <i class="bi bi-instagram text-[24px]"></i>
            <i class="bi bi-twitter text-[24px]"></i>
          </div>
        </div>
      </div>
      <div className="w-full p-6 flex items-center justify-center bg-[#000] mt-[250px]">
        <div>
          <h1 className="md:text-[44px] text-[24px] text-center font-bold text-white">
            BE PART OF SOMETHING BIG{" "}
          </h1>
          <p className="md:text-[20px] text-[14px] font-[400] text-center text-white">
            Sign up today and take the first step toward a brighter future.
          </p>
          <div className="flex gap-3 mt-10">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full min-h-[48px] resize-none rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3 overflow-hidden"
            />
            <button className=" relative z-30 px-8 py-3 h-12 font-sans  disabled:cursor-auto border-none cursor-pointer bg-purple-500 text-offwhite font-semibold rounded-lg">
              {" "}
              Send{" "}
            </button>
          </div>
          <p className="md:text-[14px] text-[10px] font-[400] text-center p-4 text-white">
            Please enter the email you used to join the waitlist to view your
            position details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
