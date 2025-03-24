import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h2 className="text-1xl font-bold mb-3.5">Send me a hola!</h2>
      <ul className="flex gap-4" aria-label="Social Media">
        <li className="hover:animate-pulse">
          <Link href="https://github.com/Joseangel15">
            <FontAwesomeIcon icon={faSquareGithub} className="h-8 w-h-8" />
          </Link>
        </li>
        <li className="hover:animate-pulse">
          <Link href="https://www.linkedin.com/in/jose-angel-ortiz-webdeveloper/">
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-h-8" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
