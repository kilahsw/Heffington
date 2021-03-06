// const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const choreoVids = path.resolve('./src/templates/choreoVids.js')
    const directingVids = path.resolve('./src/templates/directingVids.js')
    resolve(
      graphql(
        `
          {
            allContentfulChoreography {
              edges {
                node {
                  title
                  titleUrl
                }
              }
            }

            allContentfulDirecting {
              edges {
                node {
                  title
                  titleUrl
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allContentfulChoreography.edges.map((work) => {
          createPage({
            path: `/choreo/${work.node.titleUrl}`,
            component: choreoVids,
            context: {
              workName: work.node.titleUrl,
            },
          })
        })

        result.data.allContentfulDirecting.edges.map((work) => {
          createPage({
            path: `/directing/${work.node.titleUrl}`,
            component: directingVids,
            context: {
              jobName: work.node.titleUrl,
            },
          })
        })
        
      })
    )
  })
}

//   posts.forEach((post, index) => {
//   })

// result.data.allContentfulChoreography.edges.map((work => {

//     createPage({
//       path: `/${work.node.title}/`,
//       component: choreoVids,
//       context: {
//         workName: work.node.title,
//       }
//     })

// })
