"use client";

import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationProps = {
  menuItems: {
    path: string;
    label: string;
  }[];
};

export const Navigation = (props: NavigationProps) => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path ? "active" : "";
  };

  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <i className="bi bi-person-bounding-box"></i> werlang.nl
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mx-auto">
            {props.menuItems.map((item) => (
              <Link
                key={`nav-${item.label}`}
                href={item.path}
                className={`mx-3 nav-link ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </Nav>
          <Navbar.Text className="justify-content-end">
            <ThemeSwitcher />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
