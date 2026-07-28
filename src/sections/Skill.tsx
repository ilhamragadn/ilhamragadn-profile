import { skillDatas } from "../utils/SkillItem";

const Skill = () => {
  return (
    <section id="skill" className="py-14">
      <div>
        <p className="text-center text-2xl font-bold">Skills</p>
      </div>

      <div className="flex justify-center">
        <div className="w-4/5 flex flex-nowrap bg-gray-100 overflow-x-auto scroll-smooth scrollbar-hidden py-3 px-8 space-x-6 shadow-md rounded-xl">
          {skillDatas.map((skill, index) => (
            <div
              key={index}
              className="relative shrink-0 flex items-center justify-center group"
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
