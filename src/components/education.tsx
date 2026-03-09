import { collage, school } from "./constant";

export const Education = () => {
  return (
    <div id="education" className="max-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl mb-2 font-bold uppercase">Education</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold flex items-center gap-2">
            <span>{collage.institution}</span> <span>|</span>{" "}
            <span className="text-gray-400 text-sm">{collage.city}</span>
          </h2>
          <div className="text-gray-400 flex items-center gap-2">
            <span>{collage.degree}</span>
            <span className="mx-2">|</span>
            <span>{collage.duration}</span>
          </div>
          <p className="text-gray-400">{collage.branch}</p>
        </div>
        <div>
          <h2 className="font-semibold flex items-center gap-2">
            <span>{school.institution}</span> <span>|</span>{" "}
            <span className="text-gray-400 text-sm">{school.city}</span>
          </h2>
          <div className="text-gray-400 flex items-center gap-2">
            <span>{school.degree}</span>
            <span className="mx-2">|</span>
            <span>{school.duration}</span>
          </div>
          {/* <p className="text-gray-400">{school.branch}</p> */}
        </div>
      </div>
    </div>
  );
};
