import { experience } from "./constant";

export const Experience = () => {
  return (
    <div id="experience">
      {experience.map((exp, index) => (
        <div
          key={index}
          className="group grid grid-cols-[0.6fr_2fr] gap-4 mb-8 hover:bg-[#162138] p-4 rounded-lg transition-colors duration-300"
        >
          <h3 className="text-gray-400">{exp.duration}</h3>
          <div>
            <h3 className="font-semibold group-hover:text-[#55d4cd] transition-colors duration-300">
              {exp.company}
            </h3>
            <div className="text-gray-400">{exp.description}</div>
            <ul className="list-disc pl-5 mt-2 text-gray-400">
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="px-4 py-1 text-sm font-semibold bg-[#183652] rounded-full text-[#55d4cd]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
