import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
// import get from 'lodash/get'
import Img from 'gatsby-image'
import choreoVid from '../css/choreoVids.css'
import Layout from '../components/layout'

export default function choreoTemplate(props) {
  const tabTitle = props.data.site.siteMetadata.title
  const object = props.data.allContentfulChoreography.edges[0] //may need a [0]

  const title = object.node.title
  const director = object.node.director
  const home = 'home'
  const back = 'back'
  // const video = object.node.test.childMarkdownRemark.html

  console.log(props)

  return (
    <Layout>
      <div>
        <Helmet title={`${tabTitle} | ${title}`} />
        <div className="chorheader" style={{ textAlign: 'center' }}>
          <h1 className="cvids">CHOREOGRAPHY</h1>
        </div>
        <br />
        <div>
          <h1 className="cvidsubs" style={{ textAlign: 'center' }}>
            {title}
          </h1>
        </div>
        <div className='cvideos' 
          dangerouslySetInnerHTML={{
            __html:
              props.data.allContentfulChoreography.edges[0].node.videoIFrame
                .childMarkdownRemark.html,
          }}
        ></div>
        <br />
        <div>
          <p className="cdir">{director}</p>
        </div>
        <br />
        <div className="cvidnav">
          <Link to={`/`}>{home}</Link> | <Link to={`/choreo`}>{back}</Link>
        </div>
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
          director
        }
      }
    }
  }
`
