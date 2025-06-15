import About from "./About";
import Career from "./Career";
import Project from "./Project";
import Skill from "./Skill";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <section className="min-h-screen">
        <div className="grid grid-cols-2 mx-8">
          <div className="min-h-screen flex flex-col justify-center">
            <p className="text-2xl font-medium font-mono tracking-tight">
              Hey, I'm Danu👋🏼
            </p>

            <p className="text-8xl text-sky-500 font-bold tracking-tight">
              Front<span className="text-black">end</span>
            </p>
            <p className="text-8xl text-sky-500 font-bold tracking-tighter leading-16">
              <span className="text-black">Dev</span>eloper
            </p>

            <div className="mt-10 mx-8 space-y-2 space-x-4">
              <p className="text-lg tracking-tight indent-4">
                I am a web developer focusing on front end with React framework
                both JavaScript and TypeScript. Let's develop and build a new
                era system.
              </p>
              <a
                href="#connect"
                className="inline-block px-8 py-2 bg-black text-white rounded-lg font-medium transition shadow-md hover:shadow-xl hover:bg-sky-400 hover:text-black"
              >
                Get In Touch
              </a>
              <a
                href="#project"
                className="inline-block px-8 py-2 bg-gray-200 rounded-lg font-medium transition shadow-md hover:shadow-xl hover:bg-gray-500 hover:text-white"
              >
                Project
              </a>
            </div>
          </div>
          <div className="relative min-h-screen flex flex-col items-center justify-center">
            <div className="border-8 border-gray-300 p-8 rounded-full shadow-md">
              <img
                src="./ilhamragadn.jpg"
                alt="ilhamragadn-pict"
                className="w-80 h-80 shadow-lg rounded-full"
              />
            </div>
            <div className="absolute bottom-8 w-full">
              <blockquote className="text-gray-800 text-center text-sm font-light italic tracking-tight">
                "Code isn't just logic, it's communication. I build systems that
                speak clarity and deliver value."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Career />
      <Project />
      <Skill />
    </div>
  );
};

export default Home;
