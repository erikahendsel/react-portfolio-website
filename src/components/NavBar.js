import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import linkedinImg from "../assets/img/linkedin-logo.svg";
import githubImg from "../assets/img/github-logo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //We want the background of the navbar the be transparent at the top but have background when user scrolls down. Here we do the logic for it.
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    //We are adding event listener on mount
    window.addEventListener("scroll", onScroll);

    //We have to remove the event listener when component gets remooved from the DOM
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Erika Hendsel Logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`pt-2 pb-2 text-center ${
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`pt-2 pb-2 text-center ${
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`pt-2 pb-2 text-center ${
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/erika-hendsel-67b2111a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinImg} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/erikahendsel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubImg} alt="GitHub" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
