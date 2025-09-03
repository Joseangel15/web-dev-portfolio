import Link from "next/link";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Resume from "./Resume";
import Summary from "./Summary";
import Education from "./Education";

export default function HomeHero() {

  const title = "Frontend Software Engineer";

  const menuOptions = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Full Resume", href: "#resume-sect" },
    { name: "Home", href: "#top" },
  ];

  return (
    <div className="flex pl-10 pr-10 justify-items-start gap-28 pb-20 wave-section">
      <div className="w-1/2">
        <div className="flex flex-col justify-between sticky top-0 pt-20 h-svh">
          <div>
            <h1 className="text-7xl font-bold">Jose A. Ortiz</h1>
            <h2 className="text-4xl mt-3 mb-8">{title}</h2>
            <h3 className="text-2xl mt-3 mb-8 italic">
              "Logic will get you from A to B. Imagination will get you everywhere." <br /> <span className="font-bold text-xl mt-3 block not-italic">- Albert Einstein</span>
            </h3>
            <div className="pt-5">
              <nav className="pb-5">
                <ul className="flex gap-4 flex-col">
                  {
                    menuOptions.map((option) => (
                      <li key={option.name}>
                        <Link
                          href={option.href}
                          className="hover:text-accent hover:underline"
                        >
                          {option.name}
                        </Link>
                      </li>
                    ))
                  }
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
            <Education />
            <Resume />
            <section className="text-center mt-10 mb-10">
              Built with{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://nextjs.org/"
                target="_blank"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwind CSS
              </Link>
              , and{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://daisyui.com/"
                target="_blank"
              >
                DaisyUI
              </Link>
              . Hosted on{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://vercel.com/"
                target="_blank"
              >
                Vercel
              </Link>
              . Coded in{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://code.visualstudio.com/"
                target="_blank"
              >
                Visual Studio Code
              </Link>
              . Deployed with{" "}
              <Link
                className="text-accent font-bold underline"
                href="https://github.com"
                target="_blank"
              >
                Github
              </Link>{" "}
              Actions. Designed with{" "}
              <Link
                className="text-accent font-bold underline"
                href={"https://www.figma.com/"}
                target="_blank"
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
