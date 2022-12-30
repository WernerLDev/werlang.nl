import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const NavbarLink = (props: { label: string; path: string }) => {
  const router = useRouter();
  const isActive = router.pathname === props.path;

  return (
    <li className={`nav-item px-4 py-2 ${isActive && "bgcolor-black"}`}>
      <Link className={`nav-link`} href={props.path}>
        {props.label}
      </Link>
    </li>
  );
};

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={`navbar navbar-expand-md navbar-dark p-0`}>
      <div className="container d-flex justify-content-end">
        <button
          className="navbar-toggler my-2"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="mainNavigation"
          aria-expanded={expanded ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            expanded ? "d-flex" : "d-none"
          } collapse navbar-collapse d-md-flex justify-content-md-center`}
          id="mainNavigation"
        >
          <ul className="navbar-nav mb-2 mb-md-0">
            <NavbarLink label="Home" path="/" />
            <NavbarLink label="About me" path="/about-me" />
            <NavbarLink label="Blog" path="/blog" />
            {/* <NavbarLink label="Contact" path="/contact" /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
