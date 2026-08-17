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
    setIsDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="career" className="py-10 md:py-14 mr-4">
      {/* Title */}
      <div>
        <p className="text-center text-xl md:text-2xl font-bold">Career</p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-8 w-full max-w-5xl">
        {/* Garis Timeline */}
        <div
          className="
            absolute
            top-0
            bottom-0
            left-5
            w-0.5
            bg-gray-300

            md:left-1/2
            md:-translate-x-1/2
          "
        />

        <ol className="relative space-y-6 md:space-y-0">
          {timelineCareer.map((items, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                key={index}
                className="
                  relative
                  flex
                  w-full
                  items-start
                  md:min-h-45
                  md:items-center
                "
              >
                {/* Indicator */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-10
                    h-4
                    w-4
                    -translate-x-1/2
                    rounded-full
                    border-4
                    border-sky-300
                    bg-white

                    md:left-1/2
                    md:top-1/2
                    md:-translate-x-1/2
                    md:-translate-y-1/2
                  "
                />

                {/* Card Container */}
                <div
                  className={`
                    ml-10
                    w-[calc(100%-2.5rem)]

                    md:ml-0
                    md:w-1/2
                    md:pr-8

                    ${!isLeft ? "md:ml-auto md:pl-8 md:pr-0" : ""}
                  `}
                >
                  <Card
                    className="
                      rounded-md
                      bg-sky-700/85
                      px-3
                      py-3
                      shadow-lg

                      sm:px-4
                      md:px-8
                      md:py-4
                    "
                  >
                    {/* Header */}
                    <div className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <time className="block text-xs text-white/80 sm:text-sm">
                          {items.period}
                        </time>

                        <h3 className="mt-0.5 text-base font-semibold leading-tight text-white sm:text-lg md:text-xl">
                          {items.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        aria-label={`Toggle ${items.title}`}
                        onClick={() => dropdownCareer(index)}
                        className="shrink-0"
                      >
                        <FontAwesomeIcon
                          icon={faChevronCircleDown}
                          className={`
                            text-lg
                            text-white
                            transition-transform
                            duration-300

                            sm:text-xl
                            md:text-2xl

                            ${isDropdownOpen[index] ? "rotate-180" : "rotate-0"}
                          `}
                        />
                      </button>
                    </div>

                    {/* Description */}
                    {isDropdownOpen[index] && (
                      <ul
                        className="
                          mt-3
                          list-disc
                          space-y-1
                          pl-4
                          text-left
                          text-xs
                          leading-relaxed
                          tracking-tight
                          text-white/80

                          sm:text-sm
                          md:text-base
                        "
                      >
                        {items.body.map((desc, i) => (
                          <li key={i}>{Object.values(desc)[0]}</li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Career;
