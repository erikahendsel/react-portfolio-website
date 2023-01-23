import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <Col size={12} sm={12} md={6} lg={4}>
      <div className="proj-card">
        <a
          href={projectUrl !== null ? projectUrl : githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>

        <div className="proj-links">
          {projectUrl && (
            <p>
              Project:{" "}
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                {projectUrl}
              </a>
            </p>
          )}
          {githubUrl && (
            <p>
              GitHub:{" "}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                {githubUrl}
              </a>
            </p>
          )}
        </div>
      </div>
    </Col>
  );
};
