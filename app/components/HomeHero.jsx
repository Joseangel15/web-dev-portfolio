import Link from "next/link";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Experience";
import Resume from "./Resume";
import Summary from "./Summary";
import Education from "./Education";

export default function HomeHero() {

  const title = "Frontend Software Engineer";

  const menuOptions = [
    { name: "Experience", href: "#experience" },
    // { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Full Resume", href: "#resume-sect" },
    { name: "Home", href: "#top" },
  ];

  return (
    <div id="top-division" className="flex flex-col 2xl:flex-row xs:px-10 px-5 justify-items-start 2xl:gap-28 gap-5 pb-10 2xl:pb-20 wave-section ">
      <div className="w-full 2xl:w-1/2">
        <div className="flex flex-col justify-between sticky top-0 pt-20 h-auto 2xl:h-svh">
          <div>
            <h1 className="xs:text-7xl text-5xl font-bold">Jose A. Ortiz</h1>
            <h2 className="xs:text-5xl text-3xl mt-3 mb-8">{title}</h2>
            <h3 className="xs:text-3xl text-2xl mt-3 mb-8 italic text-primary">
              "Logic will get you from A to B. Imagination will get you everywhere." <br /> <span className="font-bold text-xl mt-3 block not-italic">- Albert Einstein</span>
            </h3>
            <div className="pt-5">
              <nav className="pb-5">
                <ul className="flex gap-4 flex-row justify-center 2xl:flex-col flex-wrap" aria-label="Main Menu">
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
          <Contact responsiveStyle={'hidden 2xl:block'} />
        </div>
      </div>
      <div className="mb-5 pt-0 2xl:pt-20 w-full 2xl:w-1/2">
        <div className="scroll-smooth overflow-hidden">
          <div className="anchor-behavior">
            <Summary />
            <Experience />
            {/* <Skills /> */}
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
            <Contact responsiveStyle={'block 2xl:hidden'} />
          </div>
        </div>
      </div>
    </div>
  );
}
