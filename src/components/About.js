
import nadine from "../images/nadine.jpeg"

const About = () => {
    return (
        <div className="about_body">


            <div className="about_container">

                <h1>Welcome</h1>

                <div className="about_section">
                    <img src={nadine} className="profile_picture" alt="Picture of Nadine with dark long hair and a smile" />

                    <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur aliquet ex libero, consectetur egestas metus faucibus vel.
                        Curabitur posuere gravida nulla, ac convallis eros convallis ut.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur aliquet ex libero, consectetur egestas metus faucibus vel.
                        Curabitur posuere gravida nulla, ac convallis eros convallis ut.</p>
                </div>
            </div>


        </div>
    )
};

export default About; 