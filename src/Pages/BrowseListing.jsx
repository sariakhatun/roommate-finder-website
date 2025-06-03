import React from "react";
import { FaHome } from "react-icons/fa";
import { useLoaderData } from "react-router";

const BrowseListing = () => {
  let rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className=" mx-auto my-12">
      <h2 className="text-xl lg:text-3xl font-extrabold mb-6 justify-center flex gap-2 items-center text-[#ff6347]">
     
        <FaHome></FaHome>
        Find Your Perfect Roommate
      </h2>
      <p className="text-center mb-12 w-3/5 mx-auto">
        Browse through listings to find your perfect roommate. Easily explore
        posts by others, view details, and connect with a match. Find someone
        who fits your lifestyle, budget, and location.
      </p>
      <div className="overflow-x-auto">
        <table className="table table-xs w-[300px] md:w-[720px] lg:w-[1084px] mx-auto">
          <thead className="">
            <tr className="">
              <th>No</th>
              <th>Title </th>
              <th>Location</th>
              <th>Rent Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr className="">
                <th className="text-[10px] md:text-xs lg:text-base py-4 ">
                  {index + 1}
                </th>
                <td className="text-[10px] md:text-xs   lg:text-base  font-bold py-4 ">
                  {room.title}
                </td>
                <td className="text-[10px] md:text-xs   lg:text-base py-4">
                  {room.location}
                </td>
                <td className="text-[10px] md:text-xs   lg:text-base py-4">
                  {room.rent}
                </td>
                <td className="  py-4 flex items-center justify-center">
                  <button className="btn btn-xs btn-outline text-[#ff6347]  hover:bg-[#ff6347]  hover:text-white">
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListing;
