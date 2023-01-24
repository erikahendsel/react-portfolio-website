import { Card, Col, Container, Row } from "react-bootstrap";
import tickImg from "../assets/img/tick.svg";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className="skills_texts">
                    <h2
                      className={
                        isVisible
                          ? "animate__animated animate__bounceIn animate__fast"
                          : ""
                      }
                    >
                      Skills
                    </h2>
                    <p
                      className={
                        isVisible ? "animate__animated animate__bounceIn" : ""
                      }
                    >
                      I am committed to ongoing skill development and the
                      utilization of advanced tools in order to ensure the
                      delivery of exceptional user experience. A constant
                      pursuit of new technologies and techniques keeps me at the
                      forefront of the industry, allowing for the delivery of
                      the best possible user experience.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Row xs={1} md={1} lg={3} className="g-2">
                <Col className="lg-4 mb-3 d-grid align-items-stretch">
                  <Card bg="dark">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{ fontWeight: "800" }}>
                        Front-End
                      </Card.Title>
                      <Card.Text>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          HTML
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          CSS/SCSS
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          JavaScript & jQuery
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          TypeScript
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          GSAP
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          Angular
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          React.js
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          Wordpress
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="lg-4 mb-3 d-grid align-items-stretch">
                  <Card bg="dark">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{ fontWeight: "800" }}>
                        General
                      </Card.Title>
                      <Card.Text>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          Git & GitHub
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          Jira & BitBucket
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          SCRUM / Agile
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="lg-4 mb-3 d-grid align-items-stretch">
                  <Card bg="dark">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title style={{ fontWeight: "800" }}>
                        Learning & Discovering
                      </Card.Title>
                      <Card.Text>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          Android Studio
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          Kotlin
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          React Native
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          WebGL/Three.js
                        </span>
                        <span>
                          <img
                            className="tick-image"
                            src={tickImg}
                            alt="tick"
                          />
                          The list expands and shrinks through our lifetime as
                          we all grow and discover 😊
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
