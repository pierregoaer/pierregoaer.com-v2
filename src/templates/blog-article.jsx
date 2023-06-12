import React from 'react';

import Layout from "../components/Layout";
import {graphql} from "gatsby";
import * as styles from '../styles/blog-article.module.css';
import {StaticImage} from "gatsby-plugin-image";

export function Head({data}) {
    const curBlog = data.blogArticle
    return (
        <>
            <html lang="en"/>
            <title>{curBlog.meta_title}</title>
            <meta name="description" content={curBlog.meta_description}/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content={`https://pierregoaer.com/blog/${curBlog.url}`}/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={curBlog.meta_title}/>
            <meta property="og:description" content={curBlog.meta_description}/>
            <meta property="og:image"
                  content={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,g_auto,h_400,w_700,f_auto/v1686175131/pierregoaer.com/images/${curBlog.hero_image_url}`}/>
        </>
    )
}

export default function BlogArticle({data}) {
    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

    const curBlog = data.blogArticle
    const tags = curBlog.tags.split(',').map(tag => <li>{tag.charAt(0).toUpperCase() + tag.slice(1)}</li>)

    const articleHTML = <div dangerouslySetInnerHTML={{__html: curBlog.article}}/>

    return (
        <Layout>
            <article>
                <div className={styles.blogArticleHeader}>
                    <p className={styles.articleDate}> {new Date(curBlog.created_at).toLocaleDateString("en-US", dateOptions)} — {curBlog.reading_time}min
                        read</p>
                    <h1>{curBlog.title}</h1>
                    <div className={styles.authorTags}>
                        <div className={styles.author}>

                            <StaticImage
                                src="../images/hero.png"
                                alt="Pierre Goaer | Software Developer | Content Creator"
                            />
                            <p>Pierre Goaer</p>
                        </div>
                        <ul className={styles.tags}>{tags}</ul>
                    </div>
                    <figure>
                        <img
                            src={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,g_auto,h_400,w_700,f_auto/v1686175131/pierregoaer.com/images/${curBlog.hero_image_url}`}
                            alt={curBlog.title}/>
                        <figcaption>{curBlog.hero_image_caption && `Source: ${curBlog.hero_image_caption}`}</figcaption>
                    </figure>
                </div>
                <div className={styles.blogArticleBody}>
                    {articleHTML}
                </div>
                <div className={styles.shareContainer}>
                    <p>Share this article on</p>
                    <div className={styles.shareBtnsContainer}>

                        <a href={`https://www.linkedin.com/sharing/share-offsite?&url=https://pierregoaer.com/blog/${curBlog.url}`}
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                            </svg>
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${curBlog.blurb.split(" ").join("+").replace(".", "").replace("'", "")}&url=https://pierregoaer.com/blog/${curBlog.url}&via=pierregoaer`}
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895 16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z"></path>
                            </svg>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://pierregoaer.com/blog/${curBlog.url}`}
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query getArticle($url: String) {
        blogArticle(url: {eq: $url}) {
            blurb
            created_at
            hero_image_url
            originalId
            reading_time
            title
            url
            id
            tags
            updated_at
            meta_title
            meta_description
            hero_image_caption
            article
        }
    }
`