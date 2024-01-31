import { FaReact, FaBootstrap, FaSass, FaGithub, FaSquareGit, FaHtml5, FaFigma } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoCss3} from "react-icons/io5";




const SkillSkills = () => {
    return (

        <div className="SkillSkills_container">

                <FaReact className="skill_icon" />
                <FaBootstrap className="skill_icon" />
                <FaSass className="skill_icon" />
                <FaSquareGit className="skill_icon" />
                <FaGithub className="skill_icon" />
                <FaHtml5 className="skill_icon" />
                <IoLogoCss3 className="skill_icon" />
                <IoLogoJavascript className="skill_icon" />
                <FaFigma className="skill_icon"/>
                
            </div>

    );
};

export default SkillSkills;