import { Education } from "./education";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Summary } from "./summary";

export const ProfileRightSidebar = () => {
  return (
    <div className="max-h-screen w-full overflow-y-scroll pr-20 py-20 scroll-pt-20 scroll-smooth space-y-4">
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
};
