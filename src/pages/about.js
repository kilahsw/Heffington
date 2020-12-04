import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Container from '../components/containerBio'
import ContainerQ from '../components/containerQuote'
import ContainerNav from '../components/containerNav'
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
            agencyPic {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyContentfulFluid
              }
              id
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
  const choreography = 'CHOREOGRAPHY'
  const directing = 'DIRECTING'
  const home = 'HOME'

  return (
    <div className="about">
      <Layout>
        <BackgroundImage className="biopic" fluid={img.fluid}>
          <ContainerNav>
            <div
              style={{
                margin: `1rem auto`,
                marginLeft: `10%`,
                // marginRight: `3rem`,
                maxWidth: 650
                // padding: `-10`,
              }}
              className="aboutnav"
            >
              <Link to={`/choreo/`} style={{ textDecoration: 'none' }}>
                <h4 className="bionav">choreography</h4>
              </Link>
              <Link to={`/directing/`} style={{ textDecoration: 'none' }}>
                <h4 className="bionav">directing</h4>
              </Link>
              <Link to={`/`} style={{ textDecoration: 'none' }}>
                <h4 className="bionav">home</h4>
              </Link>
            </div>
          </ContainerNav>
          <ContainerQ>
            <p className="quote">{bioquote}</p>
          </ContainerQ>
        </BackgroundImage>
        <Container>
          <div className="bottom">
            <p className="bio" dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
          <div className="agency">
            <a href="mailto:kevin.lin@caa.com">
              <Img fluid={agency.fluid} className="agencypic"></Img>
            </a>
          </div>
        </Container>
      </Layout>
    </div>
  )
}
