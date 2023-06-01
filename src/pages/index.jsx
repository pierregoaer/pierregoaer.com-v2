import * as React from "react"
import '../styles/global.css'
import HomeHero from "../components/HomeHero";
import Nav from "../components/Nav";
import HomeTechStack from "../components/HomeTechStack";
import HomeAboutMe from "../components/HomeAboutMe";
import HomeMainProjects from "../components/HomeMainProjects";
import HomeSecondaryProjects from "../components/HomeSecondaryProjects";

export default function Home() {
    return (
        <>
            <Nav/>
            <HomeHero/>
            <HomeAboutMe/>
            <HomeTechStack/>
            <HomeMainProjects/>
            <HomeSecondaryProjects/>
        </>
    )
}
