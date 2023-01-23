import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedinImg from "../assets/img/linkedin-logo.svg";
import githubImg from "../assets/img/github-logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
