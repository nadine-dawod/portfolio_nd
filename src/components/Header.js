
import { NavLink } from "react-router-dom";

const Header = () => {


    return (
        <div className="header_body">


            <div className="header_logo">
                <p className="logo">N A D I N E</p> 
                <p className="logo">D A W O D</p>
            </div>

            <div className="header_menu">
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => (isActive ? "active_link" : "inactive_link")}
                                    >About</NavLink>

                                <NavLink
                                    to="/Skills"
                                    className={({isActive}) => (isActive ? "active_link" : "inactive_link")}
                                    >Skills</NavLink>
                                
                                <NavLink 
                                    to="/Work"
                                    className={({isActive}) => (isActive ? "active_link" : "inactive_link")}
                                    >Work</NavLink>
            </div>
        </div>
    );
};
export default Header;
