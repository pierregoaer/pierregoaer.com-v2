import React from 'react'
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from '../styles/nav.module.css'

export default function Nav() {
    return (
        <nav>
            <div className={styles.navContainer}>
                <Link to={'/'} className={styles.navLogoContainer}>
                    <StaticImage
                        src="../images/logo.png"
                        alt="Logo Pierre Goaer"
                        height={55}
                    />
                </Link>
                <ul className={styles.navMenu}>
                    <li><Link to={''}>About</Link></li>
                    <li><Link to={''}>Tech</Link></li>
                    <li><Link to={'#main-projects'}>Work</Link></li>
                    <li><Link to={''}>Blog</Link></li>
                    <li><Link to={''} className="btn-primary">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}