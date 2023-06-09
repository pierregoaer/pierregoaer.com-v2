import React from 'react'
import Layout from "../components/Layout";
import * as styles from "../styles/special-page.module.css";
import {Link} from "gatsby";


export default function Page404() {
    return (
        <Layout>
            <section className={styles.specialPage}>
                <h1>404 - Not Found</h1>
                <p>Oops, it looks like this page doesn't exist.</p>
                <Link to={'/'} className="btn-primary">Go back home</Link>
            </section>
        </Layout>
    )
}