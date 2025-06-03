import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePost = () => {
    
    let room = useLoaderData()
    console.log(room)
   let {rent,title,location,roomType,lifestyle,description,contactInfo,availability,_id} = room
     let navigate = useNavigate()
    let {user} = use(AuthContext)
    let handleUpdate = e =>{
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        let updatedRoom = Object.fromEntries(formData.entries())
        console.log(updatedRoom)

         //send updated room to db

        fetch(`http://localhost:3000/rooms/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedRoom)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Post Updated Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                navigate('/myListing')
            }
        })
    } 

    return (
          <div className="w-11/12  mx-auto ">
    <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-[#ff6347] ">
        Update Post
      </h2>
      <p className="w-4/5 lg:w-3/5 mx-auto text-center">Need to make changes? Keep your listing fresh by updating your rent, location, or preferences. A quick update can help you connect with the perfect roommate even faster.</p>
     <div className=" max-w-2xl my-10 p-6 border border-gray-200 rounded-lg shadow-md mx-auto">
      
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          required defaultValue={title}
          className="input input-bordered w-full"
          placeholder="Title (e.g., Looking for a roommate in NYC)"
        />

        <input
          type="text"
          name="location"
          required defaultValue={location}
          className="input input-bordered w-full"
          placeholder="Location"
        />

        <input
          type="number"
          name="rent"
          required defaultValue={rent}
          className="input input-bordered w-full"
          placeholder="Rent Amount"
        />

        <select
          name="roomType"
          required defaultValue={roomType}
          className="select select-bordered w-full"
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>

        <select
          name="lifestyle"
          id="lifestyle" defaultValue={lifestyle}
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Preference</option>
          <option value="Pets Allowed">Pets Allowed</option>
          <option value="No Pets">No Pets</option>
          <option value="Non-Smoker">Non-Smoker</option>
          <option value="Smoker">Smoker</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Early Riser">Early Riser</option>
        </select>
        <textarea
          name="description"
          required
          rows="3" defaultValue={description}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          name="contactInfo"
          required defaultValue={contactInfo}
          className="input input-bordered w-full"
          placeholder="Contact Info (phone, email, etc.)"
        />

        <select
          name="availability"
          required defaultValue={availability}
          className="select select-bordered w-full"
        >
          <option value="available">Available</option>
          <option value="not available">Not Available</option>
        </select>

        {/* Read-only user info from Firebase */}
        <input
          type="text"
          value={user?.email || "Loading..."}
          readOnly name="userEmail"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          value={user?.displayName || "Loading..."}
          readOnly name="userName"
          className="input input-bordered w-full "
        />

        <button
          type="submit"
          className="btn bg-[#ff6347] text-white w-full hover:bg-[#e05641]"
        >
          Update Listing
        </button>
      </form>
    </div>
   </div>
    );
};

export default UpdatePost;