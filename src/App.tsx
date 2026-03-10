import "./App.css";
import { ProfileSideBar } from "./components/profile-left-sidebar";
import { ProfileRightSidebar } from "./components/profile-right-sidebar";
import { createBrowserRouter } from "react-router-dom";
import { useObserver } from "./components/useObserverHook";
import { useEffect } from "react";

function App() {
  const sections = ["about", "experience", "projects", "skills", "education"];
  const id = useObserver(sections);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-screen overflow-scroll lg:overflow-hidden box-border w-full bg-[#0f172a] text-white grid lg:grid-cols-[1.5fr_2fr]">
      {/* Cursor radial gradient */}
      <div
        id="cursor-light"
        className="hidden lg:block pointer-events-none fixed inset-0 z-0"
      ></div>

      {/* Left Sidebar (Fixed) */}
      <ProfileSideBar id={id} />

      {/* Right Scrollable Section */}
      <ProfileRightSidebar />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "about",
        element: <ProfileRightSidebar />,
      },
      {
        path: "experience",
        element: <ProfileRightSidebar />,
      },
      {
        path: "projects",
        element: <ProfileRightSidebar />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);
