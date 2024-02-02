
import bootstrap from "../images/bootstrap.png";
import expense_app from "../images/expense_app.png";
import genesis from "../images/genesis.png";
import productly from "../images/productly.png";

import { FaReact, FaBootstrap, FaSass, FaHtml5, FaFigma } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoCss3} from "react-icons/io5";

/* REACT ICON <FaReact className="skill_icon" /> */


const Work = () => {
    return (
        <div className="work_body">

            <div className="work_container">

                <div className="work_section">

                    <div className="work_box">
                        <h3 className="work_box_titel">Expence tracker</h3>
                        <img className="work__box_img" src={expense_app} alt="printscreen from website" />
                        <p className="work_box_info">
                        App for tracking expences where the user can add income and expences,
                        list expences and see balance. Made as an assignment for school.</p> 
                        <div className="work_box_iconbtn">
                            <IoLogoJavascript className="skill_icon" />
                            <FaHtml5 className="skill_icon" />
                            <a href="https://nadine-dawod.github.io/js-assignment-1/" target="_blank"><button className="work_button">Visit site</button></a>
                        </div>
                    </div>

                    <div className="work_box">
                        <h3 className="work_box_titel">Bootstrap</h3>
                        <img className="work__box_img" src={bootstrap} alt="printscreen from website" />
                        <p className="work_box_info">
                        Website about the card game Magic: the gathering.
                        The website is styled using the CSS library Bootstrap and showcase different
                        feautures such as carousel and accordion. Made as an assignment for school.  </p>
                       
                        <div className="work_box_iconbtn">
                            <FaBootstrap className="skill_icon" />
                            <FaHtml5 className="skill_icon" />
                            <a href="https://nadine-dawod.github.io/bootstrap-test/" target="_blank"><button className="work_button">Visit site</button></a>
                        </div>
                    </div>
                </div>

                <div className="work_section">

                    <div className="work_box">
                        <h3 className="work_box_titel">Genesis</h3>
                        <img className="work__box_img" src={genesis} alt="printscreen from website" />
                        <p className="work_box_info">
                        Recreating a website from a design in Figma. Using SASS
                        to structure the CSS styling. Made as an assignment for school.</p>
                        <div className="work_box_iconbtn">
                        <FaHtml5 className="skill_icon" />
                            <IoLogoCss3 className="skill_icon" />
                            <FaSass className="skill_icon" />
                            <FaFigma className="skill_icon"/>

                            <a href="https://nadine-dawod.github.io/sass-test/" target="_blank"><button className="work_button">Visit site</button></a>
                        </div>
                    </div>

                    <div className="work_box">
                        <h3 className="work_box_titel">Productly</h3>
                        <img className="work__box_img" src={productly} alt="printscreen from website" />
                        <p className="work_box_info">
                        Recreating a website from a design in Figma. Made as an assignment for school.</p>
                        <div className="work_box_iconbtn">
                            <FaHtml5 className="skill_icon" />
                            <IoLogoCss3 className="skill_icon" />
                            <FaFigma className="skill_icon"/>
                            <a href="https://nadine-dawod.github.io/productly-test/" target="_blank"><button className="work_button">Visit site</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Work; 