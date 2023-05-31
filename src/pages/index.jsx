import * as React from "react"
import '../styles/global.css'
import HomeHero from "../components/HomeHero";
import Nav from "../components/Nav";
import HomeTechStack from "../components/HomeTechStack";
import HomeAboutMe from "../components/HomeAboutMe";

export default function Home() {
    return (
        <>
            <Nav/>
            <HomeHero/>
            <HomeAboutMe/>
            <HomeTechStack/>
        </>
    )
}
