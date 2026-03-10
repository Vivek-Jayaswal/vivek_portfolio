import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "./constant";

export const Projects = () => {
  return (
    <div id="projects">
      <h2 className="lg:hidden sticky top-0 z-20 py-3 px-4 md:px-10 font-semibold tracking-widest bg-[#0F172A]/70 backdrop-blur-md">
        PROJECTS
      </h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className="group grid lg:grid-cols-[0.6fr_2fr] gap-2 lg:gap-4 mb-4 lg:mb-8 hover:bg-[#162138] p-4 md:px-10 lg:p-4 rounded-lg transition-colors duration-300"
        >
          <div>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 object-cover object-center rounded-lg mb-4"
            />
          </div>

          <div>
            <h3 className="font-semibold group-hover:text-[#55d4cd] transition-colors duration-300">
              <a
                href={project.link}
                target="_blank"
                className="flex items-center gap-1"
                rel="noopener noreferrer"
              >
                {project.name}{" "}
                <FaExternalLinkAlt size={14} className="inline-block ml-2" />
              </a>
            </h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <ul className="list-disc pl-5 mt-2">
              {project?.points?.map((desc, descIndex) => (
                <li key={descIndex} className="text-gray-400 mt-2">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
