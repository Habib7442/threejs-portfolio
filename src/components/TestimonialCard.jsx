import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TestimonialCard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = onSnapshot(
      collection(db, "portfolio-reviews"),
      (snapshot) => {
        setReviews(snapshot.docs.map((doc) => doc.data()));
        return getReviews;
      }
    );
  }, []);

  return (
    <>
      <h1 className="lg:text-5xl text-4xl font-semibold text-center text-gray-800 dark:text-gray-400 p-4">
        Feedbacks
      </h1>
      <div className="flex justify-center px-2">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.slice(0, 6).map((review) => (
            <SwiperSlide key={review.name} className="flex justify-center">
              <div className="max-w-xl p-6 bg-white dark:bg-slate-950 shadow-lg rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-blue-500">
                    {[...Array(Number(review.stars))].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.386 4.278a1 1 0 00.95.69h4.516c.969 0 1.371 1.24.588 1.81l-3.659 2.658a1 1 0 00-.364 1.118l1.386 4.278c.3.921-.755 1.688-1.54 1.118l-3.659-2.658a1 1 0 00-1.176 0l-3.659 2.658c-.784.57-1.838-.197-1.54-1.118l1.386-4.278a1 1 0 00-.364-1.118L2.002 9.705c-.784-.57-.381-1.81.588-1.81h4.516a1 1 0 00.95-.69l1.386-4.278z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 dark:text-gray-400 text-lg mb-4">
                  {review.review}
                </p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full mr-4 border-2 border-teal-500"
                    src={review.imgurl}
                    alt="Avatar"
                  />
                  <div className="text-sm">
                    <p className="text-teal-500 font-bold leading-none">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialCard;
