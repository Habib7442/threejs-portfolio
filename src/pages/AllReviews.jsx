// import Review from "../Review/Review";
import { collection, onSnapshot } from "firebase/firestore";
import { Suspense, useEffect, useState } from "react";
import { db } from "../firebase";
import Loader from "../components/Loader";
// import Stars from "../components/Stars";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = onSnapshot(
      collection(db, "portfolio-reviews"),
      (snapshot) => {
        setReviews(snapshot.docs.map((doc) => doc.data()));
        return getReviews;
      },
      []
    );
  }, []);

  console.log(reviews.imgurl)
  return (
    <main className="w-full bg-slate-900 text-yellow-50 absolute ">
      <h1 className="lg:text-5xl text-3xl font-serif italic font-bold text-center text-gray-400 lg:mt-6 mt-20">
        Testimonials
      </h1>
      <Suspense fallback={<Loader />}>
      <div className="flex justify-center flex-wrap bg-dark">
        {reviews.map((review) => (
          <div key={review.name} className="max-w-xl px-6 mt-10 mx-auto">
            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
              <div className="w-full p-6 bg-slate-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0">
                <img
                  className="h-20 w-20 md:mx-6 rounded-full object-cover shadow-md md:h-32 md:w-32 lg:h-40 lg:w-32 md:rounded-2xl"
                  src={review.imgurl}
                  alt="client"
                />
                <div className="mt-2 md:mx-4">
                  <p className="text-lg italic font-medium text-white">
                    {review.name}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed font-mono text-white text-justify md:text-base">
                    {review.review}
                  </p>
                </div>
              </div>
            </main>
            {/* <div className="flex">
              <Stars stars={review.stars} />
            </div> */}
          </div>
          
        ))}
      </div>
      </Suspense>
    </main>
  );
};

export default AllReviews;
