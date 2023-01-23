import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import recipeBaseImg from "../assets/img/projects_images/recipebase-mockup.jpg";
import oldPortfolioImg from "../assets/img/projects_images/old_portfolio.png";
import partyTimeImg from "../assets/img/projects_images/party_time.png";
import hauntedHouseImg from "../assets/img/projects_images/haunted_house.png";
import recipeAppImg from "../assets/img/projects_images/android_recipe_app.jpg";
import activityGeneratorImg from "../assets/img/projects_images/android_activity-generator.jpg";
import animalQuotesAppImg from "../assets/img/projects_images/jetpack_animal_quotes.jpg";
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
    {
      title: "Animal Quote Generator",
      description:
        "Created with Jetpack in Android Studio with Ktor as the quote feeder",
      imgUrl: animalQuotesAppImg,
      projectUrl: null,
      githubUrl:
        "https://github.com/erikahendsel/jetpack-compose-animal-quote-generator/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInDown" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec placerat justo lorem, eu congue massa blandit ut.
                    Donec lacinia metus id ante condimentum, quis posuere ante
                    pretium.
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills mb-5 justify-content-center align-items=center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-End</Nav.Link>
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
