import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p
      style={{ fontFamily: "harrington" }}
      className="font-medium sm:text-lg text-center"
    >
      {text}
    </p>
    <Link to={link} className="neo-brutalism-light-gradient neo-btn">
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-sung text-center neo-brutalism-light-gradient py-4 px-6 text-white mx-5"
      style={{ fontFamily: "harrington" }}
    >
      Hi, I am <span className="font-semibold">Habib</span>👋
      <br />
      Full Stack Developer from India
      <img className="w-6 h-6 inline-block ml-2 mb-2" src="/indiamap.png" alt="" />
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a self-taught developer with a passion for creating beautiful, intuitive, and performant user interfaces. 🤙"
      link="/about"
      btnText="Know More"
    />
  ),
  3: (
    <InfoBox
      text="Explore my projects – a fusion of code, creativity, and innovation, each telling a unique story of digital craftsmanship 🚀."
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Ready to kickstart your project? Whether you need something done or looking for a skilled developer, I'm just a message away! 💬"
      link="/contact"
      btnText="Lets get in touch"
    />
  ),
  5: (
    <InfoBox
      text="Ready to share your two cents? Your feedback powers my journey!"
      link="/review"
      btnText="Share Your Thoughts"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
