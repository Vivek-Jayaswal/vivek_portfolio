import { skills } from "./constant";

export const Skills = () => {
  return (
    <div
      className="max-h-screen flex flex-col items-start bg-gray-900 text-white p-4"
      id="skills"
    >
      <h2 className="text-xl font-bold mb-2">SKILLS</h2>
      <ul className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, skillIndex) => (
          <li
            key={skillIndex}
            className="px-4 py-1 text-sm font-semibold bg-[#183652] rounded-full text-[#55d4cd]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
