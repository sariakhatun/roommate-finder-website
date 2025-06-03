import React, { use, useState } from "react";
import { data, useLoaderData } from "react-router";
import { AuthContext } from "../Components/AuthContext";
import { FaTrashAlt, FaEdit, FaHome } from "react-icons/fa";
import MyListingDetails from "./MyListingDetails";

const MyListing = () => {
  let initialRooms = useLoaderData();
  let [rooms,setRooms]=useState(initialRooms)
  
  let { user } = use(AuthContext);
  //console.log(user);
  console.log(rooms);
  let remainingRooms = rooms.filter((room) => room.userEmail === user.email);
  console.log(remainingRooms);

 

  return (
    <div className=" mx-auto my-12">
      {remainingRooms.length === 0 ? (
        <tr>
          <td colSpan="5" className="text-center p-5 text-gray-500">
            You have no listings yet.
          </td>
        </tr>
      ) : (
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-indigo-700 my-6 flex items-center justify-center gap-2">
            <FaHome></FaHome> My Roommate Listings
          </h1>
          <p className="text-center text-gray-8=200 w-4/5  lg:w-3/5 mx-auto mb-11">
            Here you can view, update, or delete your roommate finding posts.
            Only your own listings are visible on this page — your roommate
            journey, your control.
          </p>
          <div className=" overflow-x-auto">
            <table className="table table-xs w-[300px] md:w-[720px] lg:w-[1084px] mx-auto">
              <thead className="">
                <tr>
                  <th className="p-3  text-center">No</th>
                  <th className="p-3  text-center">Title</th>
                  <th className="p-3  text-center">Rent</th>
                  <th className="p-3  text-center">Location</th>
                  <th className="p-3  text-center">Availability</th>
                  <th className="p-3  text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {
                remainingRooms.map((room, index) => <MyListingDetails room={room} rooms={rooms} setRooms={setRooms}  index={index} key={room._id}></MyListingDetails>
            )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListing;
