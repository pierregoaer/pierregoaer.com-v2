import React from 'react'
import mainProjects from "../content/mainProjects";
import MainProjectCard from "./MainProjectCard";
import * as styles from "../styles/home-main-projects.module.css";

export default function HomeMainProjects() {
    const projectsElements = mainProjects.map(project => <MainProjectCard project={project}/>)

    return (
        <section className={styles.homeMainProjects} id="work">
            <div className="section-inner">
                <div className={styles.introText}>
                    <h2>Some things I've built</h2>
                    {/*<p>Here is a list of select projects I've recently built:</p>*/}
                </div>
                <div className={styles.container}>
                    {projectsElements}
                </div>
            </div>
        </section>
    )
}