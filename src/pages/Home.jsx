import Hero from "../components/Hero";
import { social } from "../constants";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <section className="w-full h-full relative overflow-hidden">
        <div className="top-20 left-0 right-0 z-10 flex items-center justify-center h-screen">
          <div className="glassmorphism p-2 flex flex-col gap-4 fixed top-56 right-0 mt">
            {social.map((item, index) => (
              <a key={item.name} href={item.link}>
                <img className="lg:w-10 w-5" src={item.icon} alt="" />
              </a>
            ))}
          </div>
          <Hero />
        </div>
        <div className="w-full h-full bg-slate-900">
          <Projects />
        </div>
        <div className="w-full h-full bg-slate-900">
          <About />
        </div>
      </section>
    </>
  );
};

export default Home;
