import React from "react";
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import HowItWorks from "./HowItWorks";
import UserReviews from "./UserReviews";
import FeaturedSection from "./FeaturedSection";
const Home = () => {
  return (
    
     <div>
        {/* banner */}
         <div className="carousel w-full mb-8">
        <div id="slide1" className="carousel-item relative w-full h-[500px] lg:h-[625px]">
          <img
            src={slide1}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full  h-[500px] lg:h-[625px]">
          <img
            src={
                slide2
            }
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full  h-[500px] lg:h-[625px]">
          <img
            src={slide3}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full  h-[500px] lg:h-[625px]">
          <img
            src={slide4}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* featured section */}

      <FeaturedSection></FeaturedSection>
            {/* Extra section */}
            <HowItWorks></HowItWorks>
            <UserReviews></UserReviews>
     </div>
  );
};

export default Home;
