import React from 'react';
import * as styles from '../../styles/blog-page.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';

export default function HomeBlog() {
	const data = useStaticQuery(graphql`
		query allBlogsBlogPage {
			allBlogArticle(sort: { originalId: DESC }) {
				nodes {
					blurb
					created_at
					hero_image_url
					originalId
					reading_time
					title
					url
					id
					tags
				}
			}
		}
	`);

	const blogs = data.allBlogArticle.nodes;
	console.log(blogs);
	const blogCards = blogs.map(blog => <BlogCard key={blog.id} blogData={blog} />);

	return (
		<Layout>
			<section className={styles.blogIntro}>
				<div className={styles.introText}>
					<h1>Blog</h1>
					<p>Every week I share insights on things that I learn during my software developer and content creator journey.</p>
					<p>Most of the things I share here revolve around technology, health, productivity and overall how to live a better life while having fun with it.</p>
				</div>
			</section>
			<section className={styles.blogsContainer}>{blogCards}</section>
		</Layout>
	);
}
