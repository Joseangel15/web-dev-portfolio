export default function Header() {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Skills and Technologies</a>
              </li>
              <li>
                <a href="">Experience</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Resume</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">JAOWebDev</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skills and Technologies</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
          <input
            type="checkbox"
            value="corporate"
            className="toggle theme-controller"
          />
        </div>
      </div>
    </header>
  );
}
