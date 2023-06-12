import React, {useState} from 'react'
import {Link} from "gatsby";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from '../styles/nav.module.css'

export default function Nav() {
    const [mobileNavVisible, setMobileNavVisible] = useState(false)

    function handleDisplayMobileNav(e) {
        e.preventDefault()
        setMobileNavVisible((prevState => !prevState))
    }

    // window.addEventListener('click', e=>{
    //     console.log(e.target)
    // })

    return (
        <nav>
            <div className={styles.navContainer}>
                <AnchorLink to={'/'} className={styles.navLogoContainer}>
                    <StaticImage
                        src="../images/logo.png"
                        alt="Logo Pierre Goaer"
                        height={55}
                    />
                </AnchorLink>
                <ul className={styles.navMenu} data-visible={mobileNavVisible}>
                    <li onClick={handleDisplayMobileNav}><AnchorLink to={'/#about'} >ABOUT</AnchorLink></li>
                    <li onClick={handleDisplayMobileNav}><AnchorLink to={'/#tech'}>TECH</AnchorLink></li>
                    <li onClick={handleDisplayMobileNav}><AnchorLink to={'/#work'}>WORK</AnchorLink></li>
                    <li onClick={handleDisplayMobileNav}><Link to={'/blog'}>BLOG</Link></li>
                    <li onClick={handleDisplayMobileNav}><AnchorLink to={'/#contact'} className="btn-primary">CONTACT</AnchorLink></li>
                </ul>
            </div>
            <div className={styles.mobileNavIconContainer} data-visible={mobileNavVisible}
                 onClick={handleDisplayMobileNav}>
                <div
                    className={`${styles.menuTop} ${mobileNavVisible ? `${styles.active}` : ""}`}>
                </div>
                <div
                    className={`${styles.menuMiddle} ${mobileNavVisible ? `${styles.active}` : ""}`}>
                </div>
                <div
                    className={`${styles.menuBottom} ${mobileNavVisible ? `${styles.active}` : ""}`}>
                </div>
            </div>
        </nav>
    )
}