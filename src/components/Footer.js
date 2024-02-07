
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className="footer_body">
            <div className="footer_container">
                    <a href="https://github.com/nadine-dawod" target="_blank"><FaSquareGithub className="footer_icon"/></a>
                    <a href="https://www.linkedin.com/in/nadine-dawod/" target="_blank"><FaLinkedin className="footer_icon"/></a>
                    <a href="mailto:nadinekdawod@gmail.com" target="_blank"><MdOutlineAlternateEmail className="footer_icon"/></a>

            </div>
        </div>
    );
};

export default Footer;