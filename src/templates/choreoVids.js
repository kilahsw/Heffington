import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function choreoTemplate(props) {
  const tabTitle = props.data.site.siteMetadata.title
  const object = props.data.allContentfulChoreography.edges[0] //may need a [0]

  const title = object.node.title
  // const video = object.node.test.childMarkdownRemark.html

  console.log(props)

  return (
    <Layout>
      <div>
        <Helmet title={`${title} | ${tabTitle}`} />
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html:
              props.data.allContentfulChoreography.edges[0].node.videoIFrame
                .childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query choreoVidsQuery($workName: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulChoreography(filter: { titleUrl: { eq: $workName } }) {
      edges {
        node {
          title
          videoIFrame {
            childMarkdownRemark {
              html
            }
          }
          videoDisplay {
            json
          }
        }
      }
    }
  }
`
