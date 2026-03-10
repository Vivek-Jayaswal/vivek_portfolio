import { Education } from "./education";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Summary } from "./summary";

export const ProfileRightSidebar = () => {
  return (
    <div className="lg:max-h-screen w-full lg:overflow-y-scroll lg:pr-20 lg:py-20 lg:scroll-pt-20 scroll-smooth space-y-4">
      <Summary />
      <Experience />
      <div className="flex gap-4 p-4 md:px-10 lg:p-4">
        <a
          href="https://drive.google.com/file/d/1yri8Jvtuzqck0XyxIS5UX36z35NgXm4a/view?usp=sharing"
          target="_blank"
          download
          rel="noopener noreferrer"
          className="font-bold flex gap-2 items-center hover:text-[#55d4cd]"
        >
          <span>View Full Resume</span>{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-move-up-right-icon lucide-move-up-right"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
        </a>
      </div>
      <Projects />
      <Skills />
      <Education />
    </div>
  );
};
