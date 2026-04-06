import './Home.css';
import Navbar from "./Navbar";
import { FaInstagram, FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <Navbar />

            <div className="hero">
                <div className="image-frame">
                    <img id="profile1" src="/ngern.png" alt="profile" />
                </div>

                <div className="hero-text">
                    <h1 className="title">
                        Paphangkorn Duwuaodam
                    </h1>

                    <h2 className="subtitle">
                        Software Developer / Full Stack Developer
                    </h2>

                    <p className="desc">
                        Passionate Computer Science graduate with a strong interest in Web Development,
                        IoT, and Software development. I love creating innovative solutions that bridge
                        the gap between hardware and software, building intuitive web applications, and
                        solving complex problems through clean and efficient code.
                    </p>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn">View Projects</Link>

                        <div className="social-tooltip-bar">
                            <a href="https://www.instagram.com/paphangkorn__dw?igsh=MTAxbWlsbmc2MXZ4eg%3D%3D&utm_source=qr" className="icon-btn instagram">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>

                            <a href="https://www.facebook.com/paphangkorn.duwaodam/" className="icon-btn facebook">
                                <FaFacebookF />
                                <span>Facebook</span>
                            </a>

                            <a href="https://github.com/napkgern" className="icon-btn github">
                                <FaGithub />
                                <span>GitHub</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;