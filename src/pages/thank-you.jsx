import React from 'react'
import Layout from "../components/Layout";
import * as styles from "../styles/special-page.module.css";
import {Link} from "gatsby";


export default function Page404() {
    return (
        <Layout>
            <section className={styles.specialPage}>
                <h1>Thank you!</h1>
                <p>Your message was sent successfully. I will get back to you shortly.</p>
                <p>In the mean time, feel free to check my blog out.</p>
                <Link to={'/blog'} className="btn-primary">Go to Blog</Link>
            </section>
        </Layout>
    )
}