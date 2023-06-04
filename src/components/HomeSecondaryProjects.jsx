import React, {useState} from 'react'
import * as styles from "../styles/home-secondary-projects.module.css";
import secondaryProjects from "../content/secondaryProjects";
import SecondaryProjectCard from "./SecondaryProjectCard";

export default function HomeSecondaryProjects() {
    const [projects, setProjects] = useState(secondaryProjects)
    const projectsElements = projects.map((project, index) => <SecondaryProjectCard project={project} key={index}/>)

    return (
        <section className={styles.homeSecondaryProjects}>
            <div className="section-inner">
                <div className={styles.introText}>
                    <h2>Other things I've built</h2>
                    {/*<p>Here is a list of select projects I've recently built:</p>*/}
                </div>
                <div className={styles.container}>
                    {projectsElements}
                </div>
                {/*<button className="btn-secondary">See more</button>*/}
            </div>
        </section>
    )
}