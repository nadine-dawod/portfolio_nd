import { Link } from "react-router-dom";

const Sideboard = () => {
    return (
            <div className="sideboard_container">
                                <Link className="sideboard_link" to="/">About</Link>
                                <Link className="sideboard_link" to="/Skills">Skills</Link>
                                <Link className="sideboard_link" to="/Work">Work</Link>
            </div>
    );
};
export default Sideboard;