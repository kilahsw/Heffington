import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default function directingTemplate(props) {
  const tabTitle = props.data.site.siteMetadata.title
  const object = props.data.allContentfulDirecting.edges[0]

  const title = object.node.title
  const home = 'HOME'
  const back = 'BACK'
  // const video = object.node.video.id //may need .id

  console.log(props)

  return (
    <Layout>
      <Helmet title={`${title} | ${tabTitle}`} />
      <div className="dirheader" style={{ textAlign: 'center' }}>
        <h1>DIRECTING</h1>
      </div>
      <br />
      <div>
        <h2 style={{ textAlign: 'center' }}>{title}</h2>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            props.data.allContentfulDirecting.edges[0].node.videoIFrame
              .childMarkdownRemark.html,
        }}
      ></div>
      <br />
      <div>
        <Link to={`/`}>{home}</Link> | <Link to={`/directing`}>{back}</Link>
      </div>
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
