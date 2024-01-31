import SkillEducation from "./skills/SkillEducation";
import SkillWork from "./skills/SkillWork";
import SkillVolunteer from "./skills/SkillVolunteer";
import SkillSkills from "./skills/SkillSkills";


const Skills = () => {

    return (
        <div className="skills_body">
            
            <div className="skills_container">

                    <div className="skills_section">
                        <h2>Work</h2>
                        <SkillWork />
                    </div>

                    <div className="skills_section">
                        <h2>Education</h2>
                        <SkillEducation />
                    </div>

                    <div className="skills_section">
                        <h2>Volunteer</h2>
                        <SkillVolunteer />
                    </div>

                    <div className="skills_section">
                        <h2>Skills</h2>
                        <SkillSkills />
                    </div>
                </div>

            </div>
    );
};

export default Skills;