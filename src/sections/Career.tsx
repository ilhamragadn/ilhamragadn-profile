import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons/faChevronCircleDown";
import Card from "../components/Card";
import { useState } from "react";
import { timelineCareer } from "../utils/CareerItem";

const Career = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<{
    [key: number]: boolean;
  }>({});

  const dropdownCareer = (index: number) => {
    setIsDropdownOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="career" className="py-14">
      <div>
        <p className="text-center text-2xl font-bold">Career</p>
      </div>

      <div className="flex justify-center mt-8">
        <ol className="relative mb-10 w-full">
          {timelineCareer.map((items, index) => (
            <li
              key={index}
              className={`flex w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Titik indikator pada garis timeline */}
              <div className="absolute left-1/2 -ml-[9px] mt-6 w-4 h-4 bg-white border-4 border-sky-300 rounded-full" />

              {/* Kontainer Card (kiri / kanan) */}
              <div
                className={`w-1/2 px-6 ${
                  index % 2 === 0
                    ? "border-r-2 border-gray-300"
                    : "border-l-2 border-gray-300 mr-[1.02px]"
                }`}
              >
                <Card className="px-8 py-4 my-4 bg-sky-700/85 shadow-lg rounded-md">
                  <div className="flex items-center mb-1">
                    <div className="flex-1">
                      <time className="mb-1 text-sm text-white/80">
                        {items.period}
                      </time>
                      <h3 className="text-xl font-semibold text-white">
                        {items.title}
                      </h3>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronCircleDown}
                      size="2x"
                      className={`text-white ms-2 transition-transform duration-300 ${
                        isDropdownOpen[index] ? "rotate-180" : "rotate-0"
                      }`}
                      onClick={() => dropdownCareer(index)}
                    />
                  </div>
                  {isDropdownOpen[index] && (
                    <ul className="list-disc pl-4 text-white/80 text-justify tracking-tight leading-tight">
                      {items.body.map((desc, i) => (
                        <li key={i}>{Object.values(desc)[0]}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Career;
