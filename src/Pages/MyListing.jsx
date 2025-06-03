import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Components/AuthContext";
import { FaTrashAlt, FaEdit, FaHome } from "react-icons/fa";

const MyListing = () => {
  let rooms = useLoaderData();
  let { user } = use(AuthContext);
  console.log(user);
  console.log(rooms);
  let remainingRooms = rooms.filter((room) => room.userEmail === user.email);
  console.log(remainingRooms);
  return (
    <div className=" mx-auto my-12">
      
        {
        remainingRooms.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-5 text-gray-500">
                  You have no listings yet.
                </td>
              </tr>
            ):
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-center text-indigo-700 my-6 flex items-center justify-center gap-2">
        <FaHome></FaHome> My Roommate Listings
      </h1>
      <p className="text-center text-gray-600 w-4/5  lg:w-3/5 mx-auto mb-11">
        Here you can view, update, or delete your roommate finding posts. Only
        your own listings are visible on this page — your roommate journey, your
        control.
      </p>
      <div className=" overflow-x-auto">
        <table className="table table-xs w-[300px] md:w-[720px] lg:w-[1084px] mx-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3  text-center">No</th>
              <th className="p-3  text-center">Title</th>
              <th className="p-3  text-center">Rent</th>
              <th className="p-3  text-center">Location</th>
              <th className="p-3  text-center">Availability</th>
              <th className="p-3  text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {remainingRooms.map((room, index) => (
              <tr key={room._id} className="text-center hover:bg-gray-50">
                <th className="text-[10px] md:text-xs lg:text-base py-4 ">
                  {index + 1}
                </th>
                <td className="  text-[10px] md:text-xs lg:text-base py-4">
                  {room.title}
                </td>
                <td className=" text-[10px] md:text-xs lg:text-base py-4">
                  {room.rent}
                </td>
                <td className="text-[10px] md:text-xs lg:text-base py-4">
                  {room.location}
                </td>
                <td className="text-[10px] md:text-xs lg:text-base py-4">
                  <span
                    className={
                      room.availability === "available"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {room.availability}
                  </span>
                </td>
                <td className="py-4 flex items-center justify-center gap-4">
                  <button title="update"
                    className="text-blue-600 hover:bg-blue-800 btn btn-xs btn-outline hover:text-white"
                    onClick={() => console.log("Update", room._id)}
                  >
                    <FaEdit />
                  </button>
                  <button title="update" className="btn btn-xs btn-outline text-[#ff6347]  hover:bg-[#ff6347]  hover:text-white">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
            </div>
        }
      
    </div>
  );
};

export default MyListing;
