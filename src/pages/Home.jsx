import React from "react";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img5.png";
import walletIcon from "../assets/images/wallet-icon.png";
import atmIcon from "../assets/images/atm-icon.png";
import transferIcon from "../assets/images/transfer-icon.png";
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero grid place-items-center m-auto mt-10 relative">
        {/* Main Section */}
        <div className="w-full px-4 md:px-0 md:w-[80%] mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="hero-txt text-4xl md:text-7xl font-bold text-white">
                Join the waitlist for ByteCamp
              </h1>
              <p className="font-normal text-white text-base md:text-lg py-3">
                Unlock Your Potential with ByteCamp
              </p>
            </div>
            {/* Image */}
            <div className="mt-5 md:mt-0">
              <img
                src={img2}
                alt="ByteCamp illustration"
                className="w-full max-w-[300px] md:max-w-[600px]"
              />
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="flex gap-3 mt-5 px-4 md:mt-8 md:w-[80%] w-full">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-[230px] md:w-[350px] min-h-[48px] rounded-lg text-base border border-gray-700 bg-gray-800 text-gray-200 placeholder:text-gray-400 outline-none px-4 py-3 focus:ring-1 focus:ring-purple-500"
          />
          <button className="px-6 md:px-8 py-3 h-12 font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600">
            Join
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="row-1 p-6 flex flex-col md:flex-row gap-10 mt-32 mb-20 justify-center">
        {/* Feature Cards */}
        <div className="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-lg w-full md:w-80">
          <div className="mb-4">
            <img src={transferIcon} alt="Transfer Icon" />
          </div>
          <h3 className="font-bold text-2xl text-white">Trade Desk</h3>
          <p className="text-gray-400 text-center p-3">
            Invest in crypto anytime, anywhere with our safe, secure, and easy-to-use online platform.
          </p>
        </div>

        <div className="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-lg w-full md:w-80">
          <div className="mb-4">
            <img src={atmIcon} alt="ATM Icon" />
          </div>
          <h3 className="font-bold text-2xl text-white">CoinFlip ATMs</h3>
          <p className="text-gray-400 text-center p-3">
            We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto.
          </p>
        </div>

        <div className="bg-gray-900 p-6 flex flex-col justify-center items-center rounded-lg w-full md:w-80">
          <div className="mb-4">
            <img src={walletIcon} alt="Wallet Icon" />
          </div>
          <h3 className="font-bold text-2xl text-white">CoinFlip Wallet</h3>
          <p className="text-gray-400 text-center p-3">
            Store your growing investments in our non-custodial wallet that gives you access to a full suite of DeFi services in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
