import React from 'react'
import * as styles from "../styles/blog-card.module.css";
import {Link} from "gatsby";

export default function BlogCard({blogData}) {
    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    const tags = blogData.tags.split(',').map(tag => <li>{tag.charAt(0).toUpperCase() + tag.slice(1)}</li>)
    return (
        <div className={styles.blogCard}>
            <div className={styles.blogDescription}>
                <div className={styles.date}>
                    {new Date(blogData.created_at).toLocaleDateString("en-US", dateOptions)} — {blogData.reading_time}min read
                </div>
                <h3 className={styles.title}><Link to={`/blog/${blogData.url}`}>{blogData.title}</Link></h3>
                <p className={styles.blurb}>{blogData.blurb}</p>
                <ul className={styles.tags}>{tags}</ul>
            </div>
            <img
                src={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,g_auto,h_150,w_250,f_auto/v1686175131/pierregoaer.com/images/${blogData.hero_image_url}`}
                alt=""
                className={styles.blogImage}
            />
        </div>
    )
}