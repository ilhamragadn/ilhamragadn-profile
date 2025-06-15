import Card from "../components/Card";
import ReactIcon from "../assets/icons/icons-react.svg?react";
import LaravelIcon from "../assets/icons/icons-laravel.svg?react";
import MySQLIcon from "../assets/icons/icons-mysql.svg?react";
import GithubIcon from "../assets/icons/icons-github.svg?react";
import { skillDatas } from "../utils/SkillItem";

const Skill = () => {
  return (
    <section id="skill" className="py-14">
      <div>
        <p className="text-center text-2xl font-bold">Skills</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-8 mb-6 mt-4">
        <Card className="flex items-center justify-center px-6 py-3 space-x-6 rounded-md shadow-md border border-gray-100">
          <div>
            <ReactIcon className="w-32 h-32" />
          </div>
          <div>
            <h4 className="text-xl font-semibold tracking-wide leading-8">
              React
            </h4>
            <p className="indent-4 leading-5 tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem adipisci eius quae nam distinctio ab in repellendus,
              consequatur asperiores at, autem modi quas quam totam veritatis
              consequuntur! Tempora, recusandae earum.
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center px-6 py-3 space-x-6 rounded-md shadow-md border border-gray-100">
          <div>
            <LaravelIcon className="w-32 h-32" />
          </div>
          <div>
            <h4 className="text-xl font-semibold tracking-wide leading-8">
              Laravel
            </h4>
            <p className="indent-4 leading-5 tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem adipisci eius quae nam distinctio ab in repellendus,
              consequatur asperiores at, autem modi quas quam totam veritatis
              consequuntur! Tempora, recusandae earum.
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center px-6 py-3 space-x-6 rounded-md shadow-md border border-gray-100">
          <div>
            <MySQLIcon className="w-32 h-32" />
          </div>
          <div>
            <h4 className="text-xl font-semibold tracking-wide leading-8">
              MySQL
            </h4>
            <p className="indent-4 leading-5 tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem adipisci eius quae nam distinctio ab in repellendus,
              consequatur asperiores at, autem modi quas quam totam veritatis
              consequuntur! Tempora, recusandae earum.
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center px-6 py-3 space-x-6 rounded-md shadow-md border border-gray-100">
          <div>
            <GithubIcon className="w-32 h-32" />
          </div>
          <div>
            <h4 className="text-xl font-semibold tracking-wide leading-8">
              Github
            </h4>
            <p className="indent-4 leading-5 tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem adipisci eius quae nam distinctio ab in repellendus,
              consequatur asperiores at, autem modi quas quam totam veritatis
              consequuntur! Tempora, recusandae earum.
            </p>
          </div>
        </Card>
      </div>

      <div className="flex justify-center">
        <div className="w-3/5 flex flex-nowrap bg-gray-100 overflow-x-auto scroll-smooth scrollbar-hidden py-3 px-8 space-x-6 shadow-md rounded-xl">
          {skillDatas.map((skill, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 flex items-center justify-center group"
            >
              <div className="w-20 h-20">{skill.icon("w-full h-full")}</div>

              <span className="absolute -top-2.5 text-xs text-gray-800 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition duration-200">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
