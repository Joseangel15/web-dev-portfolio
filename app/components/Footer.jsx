import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://www.linkedin.com/in/jaoortiz/">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="h-6 w-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/jaoortiz/">
          <FontAwesomeIcon icon={faGithub} size="2xl" className="h-6 w-6" />
        </Link>
      </nav>
    </footer>
  );
}
