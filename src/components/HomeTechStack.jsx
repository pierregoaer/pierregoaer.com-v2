import React from 'react'
import techStack from "../content/techStack";
import * as styles from '../styles/home-tech-stack.module.css'

export default function HomeTechStack() {
    const stackElements = techStack.map(stack => {
        const stackList = stack.stack.map(tech => (
            <div className={styles.stackItem}>
                <img
                    src={`../../svg/${tech}.svg`}
                    alt={`Logo ${tech}`}
                />
                <p>{tech}</p>
            </div>
        ))
        return (
            <div className={styles.stack}>
                <h3>{stack.name}</h3>
                <div className={styles.stackList}>
                    {stackList}
                </div>
            </div>
        )
    })
    return (
        <section className={styles.homeTechStack}>
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