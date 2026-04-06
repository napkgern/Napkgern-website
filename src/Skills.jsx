import "./Skills.css";
import Navbar from "./Navbar";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiArduino } from "react-icons/si";

function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 />, colorClass: "html" },
        { name: "CSS", icon: <FaCss3Alt />, colorClass: "css" },
        { name: "JavaScript", icon: <IoLogoJavascript />, colorClass: "js" },
        { name: "React", icon: <FaReact />, colorClass: "react" },
        { name: "Node.js", icon: <FaNodeJs />, colorClass: "node" },
        { name: "MySQL", icon: <SiMysql />, colorClass: "mysql" },
        { name: "Git", icon: <FaGitAlt />, colorClass: "git" },
        { name: "Arduino / IoT", icon: <SiArduino />, colorClass: "iot" },
    ];

    return (
        <div className="skills-page">
            <Navbar />

            <section className="skills-section">
                <h1 className="skills-title">Skills & Technologies</h1>
                <p className="skills-subtitle">Technologies I work with on a daily basis</p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className={`skill-icon ${skill.colorClass}`}>
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;