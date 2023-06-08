const fetch = require('node-fetch');
const path = require('path')

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const {createNode} = actions

    // const res = await fetch('https://api.electricien-nimes.com/get-blogs');
    const res = await fetch('http://127.0.0.1:3000/get-blogs');
    const blogs = await res.json()

    blogs.forEach(blog => {
        createNode({
            ...blog,
            id: createNodeId(blog.id),
            originalId: blog.id,
            internal: {
                type: 'BlogArticle',
                contentDigest: createContentDigest(blog),
            },
        })
    })
}

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query BlogUrls {
          allBlogArticle {
            nodes {
              url
            }
          }
        }
    `)

    data.allBlogArticle.nodes.forEach(node => {
        actions.createPage({
            path: '/blog/' + node.url,
            component: path.resolve('./src/templates/blog-article.jsx'),
            context: {url: node.url}
        })
    })
}