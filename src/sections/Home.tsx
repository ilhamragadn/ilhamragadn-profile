import About from "./About";
import Career from "./Career";
import Project from "./Project";
import Skill from "./Skill";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <section className="min-h-screen">
        <div className="grid md:grid-cols-2 mx-8" >
          <div className="min-h-screen order-2 md:order-1 flex flex-col justify-center">
            <p className="text-4xl md:text-7xl text-black font-bold tracking-tight">
              Bridging <span className="text-sky-500">Dev</span>elopment &{" "}
              <span className="text-sky-500">Infra</span>structure
            </p>
            <p className="text-xl md:text-4xl text-sky-500 font-bold tracking-tighter leading-16">
              <span className="text-black">Full</span>stack •{" "}
              <span className="text-black">Dev</span>Ops •{" "}
              <span className="text-black">IT </span>Infrastructure
            </p>

            <div className="mt-10 mx-auto space-y-2 space-x-4">
              <a
                href="#connect"
                className="inline-block px-8 md:px-16 py-2 bg-black text-white text-lg rounded-lg font-medium transition shadow-md hover:shadow-xl hover:bg-sky-500 hover:text-black"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 min-h-screen flex flex-col items-center justify-center">
            <div className="border-8 border-gray-300 p-8 rounded-full shadow-md">
              <img
                src="./ilhamragadn.jpg"
                alt="ilhamragadn-pict"
                className="max-w-60 max-h-60 md:w-80 md:h-80 shadow-lg rounded-full"
              />
            </div>
            <div className="absolute bottom-8 w-full">
              <blockquote className="text-gray-800 text-center text-sm font-light italic tracking-tight">
                "Building software is more than writing code—it’s about shaping
                how systems communicate and operate. I focus on creating
                solutions that are clear, reliable, and built to scale."
              </blockquote>
            </div>
          </div>
        </div>
      </section >

      <About />
      <Career />
      <Skill />
      <Project />
    </div >
  );
};

export default Home;
