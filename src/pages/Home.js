import Header from "./../components/header/Header"
import Project from "./../components/project/Project"

import { projects } from "../helpers/ProjectList"

const Home = () => {
    return (
    <>
      <Header/>

        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project) => {
                        return (
                            <Project title={project.title} img={project.img}/>
                        )
                    })}

                </ul>
            </div>
        </main>
    </>
    )
}

export default Home;
