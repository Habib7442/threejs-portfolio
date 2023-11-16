import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Earth from "../models/Earth";
import { OrbitControls, Preload } from "@react-three/drei";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://the-digital-diary-default-rtdb.firebaseio.com/contactData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully");
      } else {
        alert("Please fill all details");
      }
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container justify-center items-center bg-black-500 w-full">
      <div className="flex justify-center items-center w-1/2 h-full relative">
        <form method="POST" className="flex flex-col">
          <input
            className="text bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userData.firstName}
            onChange={postUserData}
            required
          />
          <input
            className="text bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userData.lastName}
            onChange={postUserData}
            required
          />
          <input
            className="text bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
            type="number"
            placeholder="Phone"
            name="phone"
            value={userData.phone}
            onChange={postUserData}
            required
          />
          <input
            className="text bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={postUserData}
            required
          />
          <input
            className="text bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
            type="text"
            placeholder="Address"
            name="address"
            value={userData.address}
            onChange={postUserData}
            required
          />
          <textarea
            className="text bg-transparent outline-none text-yellow-100 border rounded-md py-2 px-3 my-2"
            placeholder="Message"
            name="message"
            value={userData.message}
            onChange={postUserData}
            required
          ></textarea>
          <button
            type="submit"
            onClick={submitData}
            className=" bg-slate-500 text-white rounded-md py-2 px-4 my-2"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />

            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
