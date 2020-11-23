import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Mobile from '../images/mobilehero.jpg'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function RootIndex() {
  const data = useStaticQuery(graphql`
    {
      allContentfulPerson {
        edges {
          node {
            title
            subtitle
            image {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const img = data.allContentfulPerson.edges[0].node.image
  const title = data.allContentfulPerson.edges[0].node.title
  const subtitle = data.allContentfulPerson.edges[0].node.subtitle
  return (
    <div>
      <Layout>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <Img fluid={img.fluid} />
        </div>
      </Layout>
    </div>
  )
}
//fluid max width cannot be done in graphql, only editor
// export const query = graphql`
//   query {
//     allContentfulPerson {
//       edges {
//         node {
//           title
//           subtitle
//           image {
//             fluid(maxWidth: 900, quality: 100) {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const posts = get(this, 'props.data.allContentfulBlogPost.edges')
// const [author] = get(this, 'props.data.allContentfulPerson.edges')

// export const pageQuery = graphql`
//   query HomeQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             fluid(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
//original blog page content. may need map reference for vids - posted in the RETURN
//  {
/* <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div> */
//  }

/*
EXTRA FROM ORIGINAL PAGE

RENDER()
const siteTitle = get(this, 'props.data.site.siteMetadata.title')
RETURN()
  // {/* <Helmet title={siteTitle} /> */
