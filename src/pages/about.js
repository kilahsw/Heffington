import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Container from '../components/containerBio'
import ContainerQ from '../components/containerQuote'
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
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const img = data.allContentfulBio.edges[0].node.image
  const bioquote = data.allContentfulBio.edges[0].node.bioQuote.bioQuote
  const bio = data.allContentfulBio.edges[0].node.body.childMarkdownRemark.html

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
          <ContainerQ>
            <p className='quote'>{bioquote}</p>
          </ContainerQ>
        </BackgroundImage>
        <Container>
          <div className="bottom">
            <p className="bio" dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
        </Container>
      </Layout>
    </div>
  )
}
