import React from "react";
import { FcRating } from "react-icons/fc";

const UserReviews = () => {
  return (
    <div>
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold  text-[#ff6347] mb-4 flex gap-2 items-center justify-center">
        <FcRating></FcRating> What Our Users Say
          </h2>
          <p className="text-gray-600 mb-8">
            Hear from people who successfully found their perfect roommates.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                “I found a clean, respectful roommate within two days of
                posting! Super easy and stress-free.”
              </p>
              <h4 className="mt-4 font-semibold text-sm text-indigo-600">
                – Rafi, Student at BRAC
              </h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                “The listings are so detailed and relevant. Loved the contact
                system and filters.”
              </p>
              <h4 className="mt-4 font-semibold text-sm text-indigo-600">
                – Nishat, Remote Worker in Bashundhara
              </h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                “As a parent, I felt safe using this to find a female roommate
                for my daughter near JU.”
              </p>
              <h4 className="mt-4 font-semibold text-sm text-indigo-600">
                – Mr. Rahman, Guardian
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserReviews;
