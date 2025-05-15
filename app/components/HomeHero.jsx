import Link from "next/link";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Resume from "./Resume";
import Summary from "./Summary";

export default function HomeHero() {
  return (
    <div className="flex pl-10 pr-10 justify-items-start gap-28 pb-20 wave-section">
      <div className="w-1/2">
        <div className="flex flex-col justify-between sticky top-0 pt-20 h-svh">
          <div>
            <h1 className="text-7xl font-bold">Jose A. Ortiz</h1>
            <h2 className="text-4xl mt-3 mb-8">Front End Web Developer</h2>
            <h3 className="text-2xl mt-3 mb-8">
              I Turn Ideas into Interactive Web Experiences.
            </h3>
            <div className="pt-5">
              <nav className="pb-5">
                <ul className="flex gap-4 flex-col">
                  <li>
                    <Link
                      href="#experience"
                      className="hover:text-accent hover:underline"
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="hover:text-accent">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#resume-sect" className="hover:text-accent">
                      Full Resume
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-accent">
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <Contact />
        </div>
      </div>
      <div className="w-1/2 mb-5 pt-20">
        <div className="scroll-smooth overflow-hidden">
          <div className="anchor-behavior">
            <Summary />
            <Experience />
            <Projects />
            <Resume />
            <section className="text-center mt-10 mb-10">
              Built with{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://nextjs.org/"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </Link>
              , and{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://daisyui.com/"
              >
                DaisyUI
              </Link>
              . Hosted on{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://vercel.com/"
              >
                Vercel
              </Link>
              . Coded in{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://code.visualstudio.com/"
              >
                Visual Studio Code
              </Link>
              . Deployed with{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://github.com"
              >
                Github
              </Link>{" "}
              Actions. Designed with{" "}
              <Link
                className="text-accent font-bold underline"
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
