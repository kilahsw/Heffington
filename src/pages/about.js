import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'

import '../css/about.css'

export default function About() {
  const data = useStaticQuery(graphql`
    {
      allContentfulBio {
        edges {
          node {
            image {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyContentfulFluid
              }
              id
            }
            bioQuote {
              bioQuote
            }
            body {
              body
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const img = data.allContentfulBio.edges[0].node.image
  const bioquote = data.allContentfulBio.edges[0].node.bioQuote.bioQuote
  const bio = data.allContentfulBio.edges[0].node.body.body

  return (
    <div className="about">
      <Layout>
        <div className="aboutnav">
          <Link to={`/choreo/`} style={{ textDecoration: 'none' }}>
            <h3
              className="bionav"
              css={`
                display: inline-block;
              `}
            >
              CHOREOGRAPHY
            </h3>
          </Link>
          <Link to={`/directing/`} style={{ textDecoration: 'none' }}>
            <h3
              className="bionav"
              css={`
                display: inline-block;
              `}
            >
              DIRECTING
            </h3>
          </Link>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <h3
              className="bionav"
              css={`
                display: inline-block;
              `}
            >
              HOME
            </h3>
          </Link>
        </div>
        <BackgroundImage className="biopic" fluid={img.fluid}>
          <div>
              <p className="quote">{bioquote}</p>
              <p className="bio">{bio}</p>
          </div>
        </BackgroundImage>
        <div className='bottom'></div>
      </Layout>
    </div>
  )
}
