import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase";

const ReviewForm = (props) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [url, setUrl] = useState("");
  const [userReview, setUserReview] = useState({
    name: "",
    email: "",
    review: "",
    stars: "", // Added stars field
    imgurl: "", // Added imgurl field
  });

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `portfolio-images/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        setUrl(url);
      });
    });
    alert("Image Uploaded Successfully");
  };

  const postUserReview = (event) => {
    setUserReview({ ...userReview, [event.target.name]: event.target.value });
  };

  const submitReview = async () => {
    const { review, name, email, stars, imgurl } = userReview;
    if (review && name && email && stars && imgurl) {
      const res = await addDoc(collection(props.db, "portfolio-reviews"), {
        review,
        name,
        email,
        stars,
        imgurl,
      }).catch(function (error) {
        alert("Something went wrong !");
      });

      if (res) {
        setUserReview({
          review: "",
          name: "",
          email: "",
          stars: "",
          imgurl: "",
        });
        alert("Review Submitted Successfully !");
      } else {
        alert("Please fill all details");
      }
    } else {
      alert("Please fill all details");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Url Copied");
    setUrl("");
  };

  return (
    <div className="mx-auto bg-black-500 text-white p-8 w-full h-full flex justify-center items-center flex-col">
      <h1 className="lg:text-5xl text-3xl font-serif italic font-bold text-center text-gray-400 lg:mt-10 mt-16 mb-4">
        Give Your Valuable Review
      </h1>
      <div className="uploadImg mb-4">
        <span className="mx-3">Upload Your Image</span>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button
          className="btn btn-success ml-4 lg:mt-2 mt-4"
          onClick={uploadImage}
        >
          Upload Image
        </button>
      </div>
      <div className="imgUrl container mb-4">
        <span>
          <b>Image Url</b> : <br />
          <br />
          <div className="url">
            <input
              type="text"
              className="text w-full bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
        </span>
        <button onClick={handleCopy} className="btn btn-warning my-2">
          Copy URL
        </button>
      </div>
      <form className="right container">
        <input
          type="text"
          className="text w-full bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
          placeholder="Name"
          name="name"
          value={userReview.name}
          onChange={postUserReview}
          required
        />
        <input
          type="email"
          className="text w-full bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
          placeholder="Email"
          name="email"
          value={userReview.email}
          onChange={postUserReview}
          required
        />
        <textarea
          className="text w-full bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
          placeholder="Review"
          name="review"
          value={userReview.review}
          onChange={postUserReview}
          required
        ></textarea>
        <input
          type="number"
          className="text w-full bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
          placeholder="Stars (Give ratings out of 5)"
          name="stars"
          value={userReview.stars}
          onChange={postUserReview}
          inputMode="numeric"
          pattern="[0-5]"
          required
        />
        <input
          type="text"
          className="text w-full bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
          placeholder="Image Url (Paste Image Url from above)"
          name="imgurl"
          value={userReview.imgurl}
          onChange={postUserReview}
          required
        />

        <button
          type="button"
          onClick={submitReview}
          variant="primary"
          className="btn btn-warning my-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
