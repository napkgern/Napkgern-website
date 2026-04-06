import { NavLink, Link } from "react-router-dom";
import { FaThLarge, FaFolder, FaWrench } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <h1 className="logo">Nabkgern</h1>
                </Link>

                <ul className="nav-links desktop-only">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/projects">Project</NavLink></li>
                </ul>
            </nav>

            <nav className="mobile-nav">
                <NavLink to="/home" className={({ isActive }) => isActive ? "mobile-item active" : "mobile-item"}>
                    <FaThLarge className="icon" />
                    <span className="text">Home</span>
                </NavLink>
                <NavLink to="/skills" className={({ isActive }) => isActive ? "mobile-item active" : "mobile-item"}>
                    <FaWrench className="icon" />
                    <span className="text">Skills</span>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "mobile-item active" : "mobile-item"}>
                    <FaFolder className="icon" />
                    <span className="text">Projects</span>
                </NavLink>
            </nav>
        </>
    );
}

export default Navbar;