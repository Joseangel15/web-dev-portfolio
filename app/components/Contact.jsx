import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Contact({ responsiveStyle }) {
  return (
    <div id="contact" className={`mb-10 ${responsiveStyle}`}>
      <h2 className="text-1xl font-bold mb-3.5 text-center 2xl:text-left">Send me a hola!</h2>
      <ul className="flex gap-4 justify-center 2xl:justify-start" aria-label="Social Media">
        <li className="hover:animate-pulse">
          <Link href="https://github.com/Joseangel15" target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} className="h-8 w-h-8" />
          </Link>
        </li>
        <li className="hover:animate-pulse">
          <Link href="https://www.linkedin.com/in/jose-angel-ortiz-webdeveloper/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-h-8" />
          </Link>
        </li>
        <li className="hover:animate-pulse">
          <Link href="mailto:joseangelortiz15@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="h-8 w-h-8" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
