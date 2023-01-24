import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/astranaut/astronaut.png";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "React",
    "Angular",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "TypeScript",
    "jQuery",
    "GSAP",
    "Wordpress",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(400);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner_texts">
              <h1>{`Hi, I'm Erika Hendsel`}</h1>
              <h3>
                {`Stack: `}
                <span className="wrap">{text}</span>
              </h3>
              <p>
                I am an experienced Front-End developer with a focus on creating
                visually appealing and user-friendly websites. Proficient in
                HTML, CSS, JavaScript and popular frameworks such as React and
                Angular. Skilled in responsive design and delivering
                high-quality interfaces.
              </p>
              <Nav.Link href="#contact">
                <button>
                  Let's connect <ArrowRightCircle size={25} />
                </button>
              </Nav.Link>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
