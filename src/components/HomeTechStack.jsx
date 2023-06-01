import React from 'react'
import TechStackList from "./TechStackList";
import techStack from "../content/techStack";
import * as styles from '../styles/home-tech-stack.module.css'

export default function HomeTechStack() {
    const stackElements = techStack.map(stack => {
        return (
            <div className={styles.stack}>
                <h3>{stack.name}</h3>
                <TechStackList stack={stack.stack} justify={'center'}/>
            </div>
        )
    })
    return (
        <section className={styles.homeTechStack} id="tech">
            <div className="section-inner">
                <div className={styles.introText}>
                    <h2>The things I know</h2>
                    <p>Here are some of the main tools and technologies I've learned during my journey:</p>
                </div>
                <div className={styles.container}>
                    {stackElements}
                </div>
            </div>
        </section>
    )
}

// query getStackImage {
//   allFile (filter: {name: {eq: "Python"}}) {
//     edges {
//       node {
//         name
//         relativePath
//       }
//     }
//   }
// }