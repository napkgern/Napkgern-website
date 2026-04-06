import "./Projects.css";
import Navbar from "./Navbar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            icon: "🔐",
            title: "IoT Fingerprint Attendance System",
            description:
                "Developed a biometric attendance system integrated with a web-based management platform for real-time tracking.",
            details: [
                "Designed and implemented backend APIs to receive and process fingerprint data from IoT devices",
                "Connected fingerprint sensor with web server for real-time data transmission",
                "Built responsive web interface for attendance monitoring and user management",
                "Designed and managed MySQL database for storing attendance records",
                "Implemented authentication and role-based access control",
            ],
            technologies: ["AS608", "ESP32", "Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/napkgern/fingerprint.git",
            demo: "https://github.com/napkgern/fingerprint.git",
        },
        {
            icon: "📊",
            title: "Details will be added soon...",
            description: "",
            details: [],
            technologies: [],
            github: "#",
            demo: "#",
        },
        {
            icon: "🎓",
            title: "Details will be added soon...",
            description: "",
            details: [],
            technologies: [],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <div className="projects-page">
            <Navbar />

            <section className="projects-section" id="projects">
                <h2 className="projects-title">Featured Projects</h2>
                <p className="projects-subtitle">Some of my recent work and personal projects</p>

                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div
                            className="project-card"
                            key={index}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-top">
                                <div className="project-icon">{project.icon}</div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>

                                {project.description ? (
                                    <p className="project-description">{project.description}</p>
                                ) : (
                                    <p className="project-placeholder">Details will be added soon...</p>
                                )}

                                {project.details.length > 0 && (
                                    <ul className="project-details">
                                        {project.details.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {project.technologies.length > 0 && (
                                    <div className="tech-container">
                                        {project.technologies.map((tech, i) => (
                                            <span className="tech-tag" key={i}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="project-buttons">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="github-btn">
                                        <FaGithub /> GitHub
                                    </a>

                                    <a href={project.demo} target="_blank" rel="noreferrer" className="demo-btn">
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;