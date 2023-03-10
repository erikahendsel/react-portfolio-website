import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import recipeBaseImg from "../assets/img/projects_images/recipebase-mockup.jpg";
import oldPortfolioImg from "../assets/img/projects_images/old_portfolio.png";
import partyTimeImg from "../assets/img/projects_images/party_time.png";
import hauntedHouseImg from "../assets/img/projects_images/haunted_house.png";
import recipeAppImg from "../assets/img/projects_images/android_recipe_app.jpg";
import activityGeneratorImg from "../assets/img/projects_images/android_activity-generator.jpg";
import animalQuotesAppImg from "../assets/img/projects_images/jetpack_animal_quotes.jpg";
import goalAppImg from "../assets/img/projects_images/goal_app_mockup.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const frontEndProjects = [
    {
      title: "RecipeBase",
      description: "Angular project fetching recipes from an API",
      imgUrl: recipeBaseImg,
      projectUrl: "https://recipe-base.netlify.app/",
      githubUrl: "https://github.com/erikahendsel/RecipeBase",
    },
    {
      title: "Old Portfolio",
      description: "Old portfolio created with HTML, SCSS, JavaScript and GSAP",
      imgUrl: oldPortfolioImg,
      projectUrl: "https://portfolio-phi-nine-48.vercel.app/",
      githubUrl: null,
    },
  ];
  const threejsProjects = [
    {
      title: "Party time \\(o.o)/",
      description: "Three.js project with disco balls and text",
      imgUrl: partyTimeImg,
      projectUrl:
        "https://threejs-party-time-e8rruai52-erikahendsel.vercel.app/",
      githubUrl: "https://github.com/erikahendsel/threejs_party_time",
    },
    {
      title: "Haunted house",
      description:
        "Learning from Bruno Simon. A small project of a haunted house",
      imgUrl: hauntedHouseImg,
      projectUrl: "https://threejs-haunted-house-mocha.vercel.app/",
      githubUrl: "https://github.com/erikahendsel/threejs_haunted_house",
    },
  ];
  const mobileProjects = [
    {
      title: "Recipe App",
      description:
        "Android app that uses RecyclerView and displays a list of recipes.",
      imgUrl: recipeAppImg,
      projectUrl: null,
      githubUrl: "https://github.com/erikahendsel/android_recipe_app",
    },
    {
      title: "Activity Generator App",
      description:
        "Using Retrofit, the Activity Generator app fetches Bored API data.",
      imgUrl: activityGeneratorImg,
      projectUrl: null,
      githubUrl: "https://github.com/erikahendsel/android-activity-generator",
    },
    // {
    //   title: "Animal Quote Generator",
    //   description:
    //     "Created with Jetpack in Android Studio with Ktor as the quote feeder.",
    //   imgUrl: animalQuotesAppImg,
    //   projectUrl: null,
    //   githubUrl:
    //     "https://github.com/erikahendsel/jetpack-compose-animal-quote-generator/",
    // },
    {
      title: "Goal App - React Native",
      description: "A React Native app where you can add your year goals.",
      imgUrl: goalAppImg,
      projectUrl: null,
      githubUrl: "https://github.com/erikahendsel/goal-app-react-native",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <div className="project_texts">
                    <h2
                      className={
                        isVisible
                          ? "animate__animated animate__bounceIn animate__fast"
                          : ""
                      }
                    >
                      Projects
                    </h2>
                    <p
                      className={
                        isVisible ? "animate__animated animate__bounceIn" : ""
                      }
                    >
                      Working on different programming projects has allowed me
                      to expand my skillset and improve my knowledge of various
                      programming languages and frameworks. With each new
                      project, I have been able to apply my growing skills to
                      create more complex and sophisticated solutions, resulting
                      in an increase in the quality and functionality of my
                      projects. As I continue to take on new challenges and
                      learn new technologies, I am constantly improving my
                      ability to deliver high-quality and effective solutions.
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills mb-5 justify-content-center align-items=center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Three.js</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Mobile</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {frontEndProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {threejsProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {mobileProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
