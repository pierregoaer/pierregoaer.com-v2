import React from 'react'
import * as styles from '../styles/home-hero.module.css'
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

export default function HomeHero() {
    return (
        <section className={styles.homeHero}>
            <div className={styles.homeHeroInner}>
                <div className={styles.homeHeroContainer}>
                    <div className={styles.homeHeroImg}>
                        <StaticImage
                            src="../assets/hero.png"
                            alt="Logo Electricien Nîmes"
                        />
                    </div>
                    <div className={styles.homeHeroText}>
                        <div className={styles.name}>Pierre Goaer</div>
                        <h1>Software Developer</h1>
                        <p>Results-oriented software developer with 5+ years of experience in various technical roles.
                            Skilled in full-stack technologies including Python, JavaScript, and SQL</p>
                        <div className={styles.buttons}>
                            <Link to={'/'} className="btn-secondary">Download resume</Link>
                            <Link to={'/'} className="btn-tertiary">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}