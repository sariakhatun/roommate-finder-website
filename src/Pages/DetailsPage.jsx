import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Components/AuthContext';
import {
  FaHeart,
  FaRegHeart,
  FaMapMarkerAlt,
  FaBed,
  FaUserFriends,
  FaInfoCircle,
  FaPhoneAlt,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

const DetailsPage = () => {
    let {user}=use(AuthContext)
   // console.log(user)


    let roomData = useLoaderData();
    //console.log(roomData)


    let {rent,location,availability,contactInfo,description,lifestyle,roomType,title,userName,userEmail}=roomData

   
  
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes_${title}`);
    if (savedLikes) setLikeCount(parseInt(savedLikes));
  }, [title]);

  const handleLike = () => {
    if (user?.email === userEmail) {
      alert("You cannot like your own post.");
      return;
    }

    if (!liked) {
      const newCount = likeCount + 1;
      setLiked(true);
      setLikeCount(newCount);
      localStorage.setItem(`likes_${title}`, newCount);
    }
  };
    return (
       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 mb-8 border border-gray-200 my-12">
      {/* Interest Count */}
      <p className="text-lg font-semibold text-center mb-4 text-gray-700">
        {likeCount} people interested in this listing
      </p>

      {/* Title + Like */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1  gap-4 text-gray-700">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span><strong>Location:</strong> {location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBill1Wave className="text-green-600" />
          <span><strong>Rent:</strong> {rent}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBed className="text-blue-600" />
          <span><strong>Room Type:</strong> {roomType}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUserFriends className="text-purple-500" />
          <span><strong>Lifestyle:</strong> {lifestyle}</span>
        </div>

        <div className="flex items-center gap-2">
          {availability === "available" ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-red-500" />
          )}
          <span><strong>Availability:</strong> {availability}</span>
        </div>
        <div className=''>
            
            <button
          onClick={handleLike}
          className={`text-2xl transition duration-200 flex gap-2 items-center ${
            user?.email === userEmail ? 'text-gray-400 cursor-not-allowed' : 'text-red-500 hover:scale-110'
          }`}
          disabled={user?.email === userEmail}
        > <p className='font-bold text-sm'>Like this post</p>
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
        </div>

       {
        liked &&  <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-indigo-500" />
          <span><strong>Contact:</strong> {contactInfo}</span>
        </div>
       }
      </div>

      {/* Description */}
      <div className="mt-4 flex items-start gap-2 text-gray-600">
        <FaInfoCircle className="mt-1 text-yellow-500" />
        <p><strong>Description:</strong> {description}</p>
      </div>

      {/* Poster Info */}
      <div className="mt-6 text-sm text-gray-500 text-right">
        Posted by: <span className="font-semibold">{userName}</span> ({userEmail})
      </div>
    </div>

    );
};

export default DetailsPage;