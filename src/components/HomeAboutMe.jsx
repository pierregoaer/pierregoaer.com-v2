import React from 'react'
import * as styles from "../styles/home-about-me.module.css";

export default function HomeAboutMe() {
    return (
        <section className={styles.homeAboutMe} id="about">
            <div className={styles.inner}>
                <h2>About Me</h2>
                <p>Hi there, my name is Pierre Goaer, I'm a software developer and here is my story.</p>
                <p>I've always had a passion for solving problems and trying to understand how things work. This
                    naturally led me to pursue mechanical engineering as a career and after graduating from my Master's at INSA Lyon (France), I got right to work with <a href="https://www.claas-group.com/press-corporate-communications/press-releases/claas-launches-the--future-factory--in-le-mans-/2487928" target="_blank" className="text-link">Claas Tractor <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></a>.</p>
                <p>I ultimately moved to Canada and worked for almost 3 years as a digital project manager. Being a problem-solver at heart, I decided to go back to something that is more engineering-oriented and learned how to code.</p>
                <p>I am currently based in Toronto, Canada, but am available anywhere on the internet.</p>
            </div>
        </section>
    )
}