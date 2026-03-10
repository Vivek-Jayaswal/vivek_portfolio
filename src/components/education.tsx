import { collage, school } from "./constant";

export const Education = () => {
  return (
    <div id="education" className="max-h-screen bg-gray-900 text-white">
      <h2 className="lg:hidden sticky top-0 z-20 py-3 px-4 md:px-10 font-semibold tracking-widest bg-[#0F172A]/70 backdrop-blur-md">
        EDUCATION
      </h2>

      <h1 className="hidden lg:block text-xl p-4 font-bold uppercase">
        Education
      </h1>

      <div className="hover:bg-[#162138] space-y-1 lg:space-y-0 rounded-lg p-4 md:px-10 lg:p-4">
        <h2 className="font-semibold flex lg:flex-row flex-col items-start lg:items-center lg:gap-2">
          <span>{collage.institution}</span>{" "}
          <span className="lg:block hidden">|</span>{" "}
          <span className="text-gray-400 text-sm">{collage.city}</span>
        </h2>
        <div className="text-gray-400 flex items-center gap-2">
          <span className="lg:text-base text-sm">{collage.degree}</span>
          <span className="mx-2 lg:text-base text-sm">|</span>
          <span className="lg:text-base text-sm">{collage.duration}</span>
        </div>
        <p className="text-gray-400 lg:text-base text-sm">{collage.branch}</p>
      </div>
      <div className="hover:bg-[#162138] p-4 md:px-10 lg:p-4 rounded-lg">
        <h2 className="font-semibold flex lg:flex-row flex-col items-start lg:items-center lg:gap-2">
          <span>{school.institution}</span>{" "}
          <span className="lg:block hidden">|</span>{" "}
          <span className="text-gray-400 text-sm">{school.city}</span>
        </h2>
        <div className="text-gray-400 flex items-center gap-2">
          <span className="lg:text-base text-sm">12th - {school.degree}</span>
          <span className="mx-2">|</span>
          <span className="lg:text-base text-sm">{school.duration}</span>
        </div>
      </div>
    </div>
  );
};
