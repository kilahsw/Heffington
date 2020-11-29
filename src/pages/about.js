import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Container from '../components/containerBio'
import ContainerQ from '../components/containerQuote'
import ContainerBp from '../components/containerBioPic'
import Layout from '../components/layout'

import '../css/about.css'

export default function About() {
  const data = useStaticQuery(graphql`
    {
      allContentfulBio {
        edges {
          node {
            agencyPic {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyContentfulFluid
              }
              id
            }
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
  const agency = data.allContentfulBio.edges[0].node.agencyPic
  const img = data.allContentfulBio.edges[0].node.image
  const bioquote = data.allContentfulBio.edges[0].node.bioQuote.bioQuote
  const bio = data.allContentfulBio.edges[0].node.body.childMarkdownRemark.html

  return (
    <div className="about">
      <Layout>
        <div className="aboutnav">
          <Link to={`/choreo/`} style={{ textDecoration: 'none' }}>
            <h6
              className="bionav"
            >
              CHOREOGRAPHY
            </h6>
          </Link>
          <Link to={`/directing/`} style={{ textDecoration: 'none' }}>
            <h6
              className="bionav"
            >
              DIRECTING
            </h6>
          </Link>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <h6
              className="bionav"
            >
              HOME
            </h6>
          </Link>
        </div>
        <BackgroundImage className="biopic" fluid={img.fluid}>
          {/* <Img
            fluid={agency.fluid}
            alt="picture of CAA logo"
            className="agency"
          /> */}
          <ContainerQ>
            <p className="quote">{bioquote}</p>
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
