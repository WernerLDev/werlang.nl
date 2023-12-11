"use client";

import { Button, Container } from "react-bootstrap";
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

  return (
    <Navbar sticky="top" expand="lg" collapseOnSelect>
      <Container fluid className="px-3 px-lg-5">
        <Nav.Link
          as={Link}
          eventKey={0}
          href="/"
          className="text-decoration-none"
        >
          <Navbar.Brand>
            <i className="bi bi-person-bounding-box"></i> werlang.nl
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mx-auto">
            {props.menuItems.map((item, index) => (
              <Nav.Link
                as={Link}
                eventKey={index}
                key={`nav-${item.label}`}
                href={item.path}
                active={pathName === item.path}
                className={`mx-3 nav-link`}
              >
                {item.label}
              </Nav.Link>
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
