
import { useState } from "react";

import Sideboard from "./Sideboard";
import Button from "./Button";
import SkillOne from "./skills/SkillOne";
import SkillTwo from "./skills/SkillTwo";
import SkillThree from "./skills/SkillThree";
import SkillFour from "./skills/SkillFour";

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

                <div className="skills_sections">
                    <div className="skills_section_one">
                        <h2>Work</h2>
                        <Button handleClick={() => setOne(!one)}>
                            {one ? "See more" : "See less"}
                        </Button>
                            {one ? null : <SkillOne />}
                    </div>

                    <div className="skills_section_two">
                        <h2>Education</h2>
                        <Button handleClick={() => setTwo(!two)}>
                            {two ? "See more" : "See less"}
                        </Button>
                            {two ? null : <SkillTwo />}
                    </div>

                    <div className="skills_section_three">
                        <h2>Volunteer</h2>
                        <Button handleClick={() => setThree(!three)}>
                            {three ? "See more" : "See less"}
                        </Button>
                            {three ? null : <SkillThree />}

                    </div>

                    <div className="skills_section_four">
                        <h2>Skills</h2>
                        <Button handleClick={() => setFour(!four)}>
                            {four ? "See more" : "See less"}
                        </Button>
                            {four ? null : <SkillFour />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;