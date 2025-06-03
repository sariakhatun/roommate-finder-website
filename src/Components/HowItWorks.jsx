import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaSearchLocation } from "react-icons/fa";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="my-8">
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold  text-[#ff6347] mb-4 flex justify-center items-center gap-2">
            <FaSearchLocation></FaSearchLocation> How It Works
          </h2>
          <p className="text-gray-600 mb-8">
            Finding a roommate has never been easier! Just follow these simple
            steps:
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                <TbCircleNumber1 size={23} className=" text-[#ff6347]"></TbCircleNumber1> Create an Account
              </h3>
              <p className="text-gray-600">
                Sign up using your email or Google account and access your
                personalized dashboard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                <TbCircleNumber2 size={23} className=" text-[#ff6347]"></TbCircleNumber2> Post or Browse Listings
              </h3>
              <p className="text-gray-600">
                Add your own roommate listing or explore others based on
                location and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 flex gap-1 items-center">
                <TbCircleNumber3 size={23} className=" text-[#ff6347]"></TbCircleNumber3> Connect & Move In
              </h3>
              <p className="text-gray-600">
                Contact your match, set up a meeting, and start your shared
                living journey!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
