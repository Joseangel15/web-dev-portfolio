import Link from "next/link";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Resume from "./Resume";

export default function HomeHero() {
  return (
    <div className="flex pl-10 pr-10 justify-items-start gap-28 pb-20">
      <div className="w-1/2">
        <div className="flex flex-col justify-between sticky top-0 pt-20 h-svh">
          <div>
            <h1 className="text-7xl font-bold">Jose A. Ortiz</h1>
            <h2 className="text-4xl mt-3 mb-10">Front End Developer</h2>
            <p className="text-2xl mt-6">
              I Turn Ideas into Interactive Web Experiences.
            </p>
            {/* Make the technologies into links */}
            <p>
              I’m a web developer with a background in HR and communications,
              which means I bring both a technical mindset and a people-first
              approach to everything I build. I love turning ideas into
              interactive experiences, always aiming for clean, efficient, and
              user-friendly designs.
            </p>
            <p>
              I work with React, JavaScript, CSS, HTML, next.js, Tailwind CSS, and more,
              constantly pushing myself to improve and learn new technologies.
              Problem-solving is at the heart of what I do—I enjoy breaking down
              complex challenges and crafting elegant solutions.
            </p>
            <p>
              Outside of coding, I’m all about exploration and creativity.
              Whether it’s hitting the road for a new adventure, capturing the
              world through photography, or diving into video production, I’m
              always looking for fresh perspectives and new experiences.
            </p>
          </div>
          <Contact />
        </div>
      </div>
      <div className="w-1/2 mb-5">
        <div className="sticky top-0 z-10 pt-20 gradient-exp">
          <nav className="pb-5">
            <ul className="flex gap-4 justify-center">
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#resume-sect">Full Resume</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="scroll-smooth">
          <div className="anchor-behavior">
            <Experience />
            <Projects />
            <Resume />
            <section className="text-center mt-10 mb-10">
              Built with{" "}
              <Link
                className="text-accent font-bold"
                href="https://nextjs.org/"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                className="text-accent font-bold"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </Link>
              , and{" "}
              <Link
                className="text-accent font-bold"
                href="https://daisyui.com/"
              >
                DaisyUI
              </Link>
              . Hosted on{" "}
              <Link
                className="text-accent font-bold"
                href="https://vercel.com/"
              >
                Vercel
              </Link>
              . Coded in{" "}
              <Link
                className="text-accent font-bold"
                href="https://code.visualstudio.com/"
              >
                Visual Studio Code
              </Link>
              . Deployed with{" "}
              <Link className="text-accent font-bold" href="https://github.com">
                Github
              </Link>{" "}
              Actions. Designed with{" "}
              <Link
                className="text-accent font-bold"
                href={"https://www.figma.com/"}
              >
                Figma
              </Link>
              .
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
