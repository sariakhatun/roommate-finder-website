import React, { use } from "react";
import { AuthContext } from "../Components/AuthContext";
import Swal from "sweetalert2";

const FindRoommate = () => {
  let { user } = use(AuthContext);

  let handleAddListing = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let newRoom = Object.fromEntries(formData.entries());
    console.log(newRoom);

    //send data to the server
    fetch("https://b11a10-server-side-sariakhatun.vercel.app/rooms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRoom),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding room to db", data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      form.reset();
  };

  return (
   <div className="w-11/12  mx-auto ">
    <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-[#ff6347] ">
        Post a Roommate Listing
      </h2>
      <p className="w-4/5 lg:w-3/5 mx-auto text-center">Looking for someone to share your space and split the rent? Post your roommate listing here and connect with like-minded individuals who are clean, respectful, and ready to move in. Whether you’ve got a spare room or want to fill a shared one, your perfect roommate might be just a click away!</p>
     <div className=" max-w-2xl my-10 p-6 border border-gray-200 rounded-lg shadow-md mx-auto">
      
      <form onSubmit={handleAddListing} className="space-y-4">
        <input
          type="text"
          name="title"
          required
          className="input input-bordered w-full"
          placeholder="Title (e.g., Looking for a roommate in NYC)"
        />

        <input
          type="text"
          name="location"
          required
          className="input input-bordered w-full"
          placeholder="Location"
        />

        <input
          type="number"
          name="rent"
          required
          className="input input-bordered w-full"
          placeholder="Rent Amount"
        />

        <select
          name="roomType"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>

        <select
          name="lifestyle"
          id="lifestyle"
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
          rows="3"
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          name="contactInfo"
          required
          className="input input-bordered w-full"
          placeholder="Contact Info (phone, email, etc.)"
        />

        <select
          name="availability"
          required
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
          Add Listing
        </button>
      </form>
    </div>
   </div>
  );
};

export default FindRoommate;
