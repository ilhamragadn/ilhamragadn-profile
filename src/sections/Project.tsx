import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Card";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { projectDatas } from "../utils/ProjectItem";

const Project = () => {
  return (
    <section id="project" className="py-14">
      <div>
        <p className="text-center text-2xl font-bold">Projects</p>
      </div>

      <div className="min-h-56 flex flex-nowrap bg-gray-100 overflow-x-auto scroll-smooth scrollbar-hidden mb-8 mt-4 px-8 py-3 space-x-4">
        {projectDatas.map((project, index) => (
          <Card
            key={index}
            className="w-80 h-fit flex-shrink-0 bg-white border border-gray-100 rounded-md shadow-md"
          >
            <img
              src="https://placehold.co/320x160"
              alt=""
              className="rounded-t-md shadow"
            />
            <div className="p-2">
              <h4 className="text-lg font-bold capitalize">{project.title}</h4>
              <p className="text-sm font-light tracking-tight line-clamp-2">
                {project.body}
              </p>
              <div className="flex mt-4 space-x-2">
                <Link
                  to={project.detailLink}
                  className="flex-1 flex justify-center items-center bg-sky-500 py-2 rounded-md shadow-md"
                >
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    size="lg"
                    className="text-white"
                  />
                </Link>
                <Link
                  to={project.githubLink}
                  className="flex-1 flex justify-center items-center bg-black py-2 rounded-md shadow-md"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="text-white"
                  />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Project;
