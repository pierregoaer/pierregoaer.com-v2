import * as React from "react"
import '../styles/global.css'
import HomeHero from "../components/HomeHero";
import HomeTechStack from "../components/HomeTechStack";
import HomeAboutMe from "../components/HomeAboutMe";
import HomeMainProjects from "../components/HomeMainProjects";
import HomeSecondaryProjects from "../components/HomeSecondaryProjects";
import HomeContact from "../components/HomeContact";
import HomeBlog from "../components/HomeBlog";
import Layout from "../components/Layout";
import HomeContactNew from "../components/HomeContactNew";

export function Head() {
    return (
        <>
            <html lang="en"/>
            <title>Pierre Goaer | Software Developer</title>
            <meta name="description"
                  content="Welcome to my personal portfolio. I'm a software developer skilled in full-stack technologies! Get in touch!"/>
            <meta name="robots" content="index, follow"/>
        </>
    )
}

export default function Home() {
    return (
        <Layout>
            <HomeHero/>
            <HomeAboutMe/>
            <HomeTechStack/>
            <HomeMainProjects/>
            <HomeSecondaryProjects/>
            <HomeBlog/>
            <HomeContactNew/>
        </Layout>
    )
}
