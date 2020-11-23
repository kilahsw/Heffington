// const Promise = require('bluebird')
// const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const about = path.resolve('./src/templates/about.js')
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulBio {
//               edges {
//                 node {
//                   image {
//                     id
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then((result) => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }
        
//         const bio = result.data.allContentfulBio.edges(
//           createPage({
//             path: `/about`
//           })
//         )






        // const posts = result.data.allContentfulBlogPost.edges
        // posts.forEach((post, index) => {
        //   createPage({
        //     path: `/blog/${post.node.slug}/`,
        //     component: blogPost,
        //     context: {
        //       slug: post.node.slug
        //     },
        //   })
        // })
//       })
//     )
//   })
// }
