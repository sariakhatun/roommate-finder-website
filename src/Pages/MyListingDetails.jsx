import React from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaEdit, FaHome } from "react-icons/fa";
const MyListingDetails = ({room,index}) => {
    //console.log(room)
   let {_id}=room
   //console.log(_id)

     let handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            console.log(result.isConfirmed)
          if (result.isConfirmed) {
            
            fetch(`http://localhost:3000/rooms/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('after delete',data)
            })
    
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      };
    return (
        <tr className="text-center hover:bg-gray-50">
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
                    <td className="py-4 my-auto flex items-center justify-center gap-4 mt-5 lg:mt-0">
                      <button
                        title="update"
                        className="text-blue-600 hover:bg-blue-800 btn btn-xs btn-outline hover:text-white"
                        
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={()=>handleDelete(_id)}
                        title="delete"
                        className="btn btn-xs btn-outline text-[#ff6347]  hover:bg-[#ff6347]  hover:text-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
    );
};

export default MyListingDetails;