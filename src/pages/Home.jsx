import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import { social } from "../constants";
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [scale, setScale] = useState(1.5);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.3, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1.5, 1.5, 1.5];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [-2, -2, -1];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <>
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
          <div className="glassmorphism p-2 flex flex-col gap-4 fixed top-56 right-0 mt">
            {social.map((item, index) => (
              <a key={item.name} href={item.link}>
              <img className="lg:w-10 w-5" src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
          background-color="#ffffff"
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[2, 2, 2]} intensity={4} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={3}
            />

            <Bird />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              planeScale={planeScale}
              planePosition={planePosition}
              rotation={[0.01, -20, 0.01]}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default Home;
