import { Link } from "react-router-dom";

const Header = () => {


    return (
        <div className="header_body">
            <div className="header_container">
                <p className="logo">N A D I N E</p> 
                <p className="logo">D A W O D</p>
            </div>

            <div className="header_menu">
                                <Link className="header_link" to="/">About</Link>
                                <Link className="header_link" to="/Skills">Skills</Link>
                                <Link className="header_link" to="/Work">Work</Link>
            </div>
        </div>
    );
};
export default Header;
