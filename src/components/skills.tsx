import { skills } from "./constant";

export const Skills = () => {
  return (
    <div
      className="max-h-screen flex flex-col items-start bg-gray-900 text-white"
      id="skills"
    >
      <h2 className="lg:hidden sticky top-0 z-20 py-3 px-4 md:px-10 font-semibold tracking-widest bg-[#0F172A]/70 backdrop-blur-md">
        SKILLS
      </h2>
      <div className="p-4 md:p-10 lg:p-4">
        <h2 className="hidden lg:block text-xl font-bold mb-2">SKILLS</h2>
        <ul className="flex flex-wrap gap-2 lg:mt-4">
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
    </div>
  );
};
