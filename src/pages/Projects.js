import BtnGitHub from "../components/btnGitHub/btnGitHub";
import bg from "./../img/bg.png"


const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h2 className="title-1">Hello there</h2>

                    <img src={bg} className="project-details__cover" alt="1"/>

                    <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                    </div>

                    <BtnGitHub link="https://google.com"/>

                </div>
            </div>
        </main>

    )
}

export default Projects;
