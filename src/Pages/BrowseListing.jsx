import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseCard from '../Components/BrowseCard';

const BrowseListing = () => {
    let rooms = useLoaderData();
    console.log(rooms);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Browse Roommate Listings</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Rent</th>
            <th className="border px-4 py-2">Room Type</th>
            <th className="border px-4 py-2">Availability</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <BrowseCard key={room._id} room={room} />
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default BrowseListing;