import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="parallax w-full h-screen text-yellow-50 bg-slate-700 relative flex justify-center items-center overflow-hidden"
      // style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}
      ref={ref}
    >
      <motion.h1 style={{ y: yText, ease: "easeInOut" }} className="text-5xl font-serif italic">
        What I Did ?
      </motion.h1>
      <motion.div
        className="mountains"
        style={{
          backgroundImage: "url('/landscape.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "3",
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: "url('/planets.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "2",
          y: yBg,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          backgroundImage: "url('/stars.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "1",
          x: yBg,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
