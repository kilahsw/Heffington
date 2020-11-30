import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import directVid from '../css/directingVids.css'
import Layout from '../components/layout'

export default function directingTemplate(props) {
  const tabTitle = props.data.site.siteMetadata.title
  const object = props.data.allContentfulDirecting.edges[0]

  const title = object.node.title
  const home = 'home'
  const back = 'back'
  // const video = object.node.video.id //may need .id

  console.log(props)

  return (
    <Layout>
      <Helmet title={`${tabTitle} | ${title}`} />
      <div className="dirheader" style={{ textAlign: 'center' }}>
        <h1 className="dvids">DIRECTING</h1>
      </div>
      <br />
      <div>
        <h2 className="dvidsubs" style={{ textAlign: 'center' }}>
          {title}
        </h2>
      </div>
      <div
        className="dvideos"
        dangerouslySetInnerHTML={{
          __html:
            props.data.allContentfulDirecting.edges[0].node.videoIFrame
              .childMarkdownRemark.html,
        }}
      ></div>
      <br />
      <div className="dvidnav">
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
