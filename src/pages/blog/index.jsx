import React from 'react'
import * as styles from "../../styles/home-blog.module.css";
import {graphql} from "gatsby";

export default function HomeBlog({data}) {

    const blogs = data.allBlogArticle.nodes
    console.log(blogs)
    return (
        <section className={styles.homeBlog}>
            <div className="section-inner">
                <div className={styles.introText}>
                    <h2>Other things I've built</h2>
                    {/*<p>Here is a list of select projects I've recently built:</p>*/}
                </div>
                <div className={styles.container}>
                    {/*{projectsElements}*/}
                </div>
                {/*<button className="btn-secondary">See more</button>*/}
            </div>
        </section>
    )
}

export const query = graphql`
    query allBlogs {
        allBlogArticle {
            nodes {
                blurb
                created_at
                hero_image_url
                originalId
                reading_time
                title
                url
            }
        }
    }
`