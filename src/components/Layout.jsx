import React from 'react'
import Nav from "./Nav";
import Footer from "./Footer";
import SidebarLinks from "./SidebarLinks";
import ScrollToTopBTn from "./ScrollToTopBTn";

export default function Layout({children}) {
    return (
        <>
            <Nav/>
            <SidebarLinks/>
            {children}
            <ScrollToTopBTn/>
            <Footer/>
        </>
    )
}