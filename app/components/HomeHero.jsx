import Link from "next/link";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

export default function HomeHero() {
  return (
    <div className="flex pl-10 pr-10 justify-items-start gap-28 pt-20 pb-20">
      <div className="w-1/2">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-bold">Jose A. Ortiz</h1>
            <h2 className="text-4xl mt-3">Front End Developer</h2>
            <p className="text-2xl mt-6">
              I Turn Ideas into Interactive Web Experiences.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Contact />
        </div>
      </div>
      <div className="w-1/2 relative mb-5">
        <div className="sticky t-0">
          <nav className="pb-5">
            <ul className="flex gap-4 justify-center">
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Full Resume</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="max-h-[75vh] overflow-auto scroll-smooth">
          <div className="">
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
