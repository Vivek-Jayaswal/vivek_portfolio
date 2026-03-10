import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

export function ProfileSideBar({ id }: { id: string }) {
  return (
    <div className="lg:sticky lg:left-0 lg:top-0 lg:pl-28 lg:pt-20 lg:pb-6 p-4 md:p-10  pt-8 lg:h-screen w-full flex flex-col gap-8 pb-20 justify-between items-start">
      <div className="space-y-2">
        <h1 className="text-3xl lg:text-5xl font-extrabold">Vivek Jayaswal</h1>
        <h2 className="text-lg lg:text-2xl font-semibold text-gray-300">
          Frontend Engineer
        </h2>
        <p className="text-gray-400 max-w-md">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      {/* Navigation */}
      <div className="space-y-6 lg:block hidden">
        {[
          { id: "about", label: "ABOUT", route: "/about" },
          { id: "experience", label: "EXPERIENCE", route: "/experience" },
          { id: "projects", label: "PROJECTS", route: "/projects" },
        ].map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            className="group flex items-center gap-4 cursor-pointer"
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span
              className={`border transition-all duration-300 ease-in-out group-hover:w-20 group-hover:border-white ${id === item.id ? "w-20 border-white" : "w-10 border-gray-400"}`}
            ></span>
            <span
              className={`group-hover:text-white ${id === item.id ? "text-white" : "text-gray-400"}`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Social Icons */}
      <ul className="flex gap-4">
        <li className="cursor-pointer" title="Github">
          <a
            href="https://github.com/Vivek-Jayaswal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white">
              <IoLogoGithub size={25} className="" />
            </span>
          </a>
        </li>
        <li className="cursor-pointer" title="Linkedin">
          <a
            href="https://www.linkedin.com/in/vivek-jayaswal01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white">
              <IoLogoLinkedin size={25} className="" />
            </span>
          </a>
        </li>
        {/* <li className="cursor-pointer">
            <a
              href="https://linkedin.com/in/vivek-jayaswal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white">
                <IoLogoInstagram size={25} className="" />
              </span>
            </a>
          </li> */}
        <li className="cursor-pointer" title="Leet Code">
          <a
            href="https://leetcode.com/u/Vivek__Jayaswal/"
            target="_blank"
            rel="noopener noreferrer"
            title="Leet Code"
          >
            <span className="text-white">
              <SiLeetcode size={25} className="" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
