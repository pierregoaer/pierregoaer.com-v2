import * as React from "react"
import '../styles/global.css'
import HomeHero from "../components/HomeHero";
import Nav from "../components/Nav";

export default function Home() {
    return (
        <>
            <Nav/>
            <HomeHero/>
        </>
    )
}
