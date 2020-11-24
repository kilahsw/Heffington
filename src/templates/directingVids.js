import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default function directingTemplate(props) {
  const tabTitle = props.data.site.siteMetadata.title
  const object = props.data.allContentfulDirecting.edges[0]

  const title = object.node.title
  const video = object.node.video.id //may need .id

  console.log(props)

  return (
    <Layout>
      <Helmet title={`${title} | ${tabTitle}`} />
      <h1>{title}</h1>
      <div>{video}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query directingVidsQuery($jobName: String!) {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulDirecting(filter: { titleUrl: { eq: $jobName } }) {
      edges {
        node {
          title
          video {
            id
          }
        }
      }
    }
  }
`
