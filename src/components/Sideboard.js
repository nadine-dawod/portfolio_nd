import { NavLink } from "react-router-dom";

const Sideboard = () => {
    return (
            <div className="sideboard_container">
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
    );
};
export default Sideboard;