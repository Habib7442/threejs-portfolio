import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
      <h1 className="lg:text-[50px] md:text-[40px] text-[35px] mt-14 font-serif text-yellow-100">
        Hi I&apos;m {""}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Habib
        </span>🙋
      </h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          1000,
          "App Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: window.innerWidth <= 640 ? "2em" : "3em",
          display: "inline-block",
          color: "black",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          backgroundColor: "yellow",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Hero;
