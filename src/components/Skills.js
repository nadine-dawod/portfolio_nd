
import { useState } from "react";

import Sideboard from "./Sideboard";
import Button from "./Button";
import SkillOne from "./SkillOne";

const Skills = () => {

    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(true);
    const [three, setThree] = useState(true);
    const [four, setFour] = useState(true);

    return (
        <div className="skills_body">
            
            <div><Sideboard /></div>

            <div className="skills_container">

                <h1>Experiences</h1>

                <div className="skills_section_one">
                    <h2>Work experience</h2>
                    <Button handleClick={() => setOne(!one)}>
                        {one ? "See more" : "See less"}
                    </Button>
                        {one ? null : <SkillOne />}
                </div>

                <div className="skills_section_two">
                    <h2>Education</h2>
                </div>

                <div className="skills_section_three">
                    <h2>Volunteer</h2>

                </div>

                <div className="skills_section_four">
                    <h2>Skills</h2>
                </div>

            </div>
        </div>
    );
};

export default Skills;