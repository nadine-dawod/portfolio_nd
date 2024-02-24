
import nadine from "../images/nadine.jpeg"

const About = () => {
    return (
        <div className="about_body">


            <div className="about_container">

                <h1>Welcome</h1>

                <div className="about_section">
                    <img src={nadine} className="profile_picture" alt="Picture of Nadine with dark long hair and a smile" />

                    <p className="about_text">

                        On the journey of changing line of work into the field of front end development! 
                        <br></br><br></br>
                        After gaining some skills after various free online courses I enrolled at a course in
                        Front End Developement which I recently finished. During the course I developed my proficiency 
                        in HTML, CSS and JavaScript which I had only learned through free online courses before. 
                        After the course I have continued to explore and evolve my skills within the field on my own.
                        <br></br><br></br>
                        I have a BA in Human Rights and a MA in Gender Studies as well as a long career working 
                        in different organisations within Swedish Civil Society. I have worked in areas such as
                        to migration, sexual and reproductive health and rights and organisational development.
                        I live in Malmö and am looking for work preferably in Malmö or Copenhagen.

                    </p>
                </div>
            </div>


        </div>
    )
};

export default About; 