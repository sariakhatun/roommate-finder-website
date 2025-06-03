import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { MdTitle, MdLocationOn } from "react-icons/md";
import { FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const FeaturedSection = () => {
  let rooms = useLoaderData();
  console.log(rooms);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#ff6347] mb-4">
        Find Your Perfect Roommate
      </h2>
      <p className="text-center mb-8">
        Say goodbye to stressful roommate hunting! We've spotlighted the best
        available listings just for you—safe, affordable, and ready to move in.
        Find your perfect match and start living smarter today!
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className=" shadow-lg p-5 rounded-lg border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2 flex items-center gap-2">
              {room.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
              <FaMoneyBillWave className="text-[#ff6347]" />
              <span><strong>Rent:</strong> {room.rent} BDT</span>
            </p>
            <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
              <MdLocationOn className="text-[#ff6347]" size={18}/>
              <span><strong>Location:</strong> {room.location}</span>
            </p>
            <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
              <FaCheckCircle
                className={
                 "text-green-600"
                    
                }
              />
              <span>
                <strong>Availability:</strong>{" "}
                <span
                  className={
                  
                       "text-green-600 font-medium"
                     
                  }
                >
                  {room.availability}
                </span>
              </span>
            </p>
            <Link
             to={`/detailsPage/${room._id}`}
              className="inline-block mt-2 bg-[#ff6347] text-white px-4 py-2 rounded hover:bg-[#e5533b] transition"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
