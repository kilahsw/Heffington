import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'

import '../css/index.css'

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
        {/* <div className="name">
          <div className="ryan">{title}</div>
          <div className="artist">{subtitle}</div>
        </div> */}
        <BackgroundImage className="hero" fluid={img.fluid}>
          <h1 className="name">{title}</h1>
          <h2 className="description">{subtitle}</h2>
          <div className="nav">
            <Link to={`/about/`} style={{ textDecoration: 'none' }}>
              <h5
                css={`
                  display: inline-block;
                `}
              >
                ABOUT
              </h5>
            </Link>
            <Link to={`/choreo/`} style={{ textDecoration: 'none' }}>
              <h5
                css={`
                  display: inline-block;
                `}
              >
                CHOREOGRAPHY
              </h5>
            </Link>
            <Link to={`/directing/`} style={{ textDecoration: 'none' }}>
              <h5
                css={`
                  display: inline-block;
                `}
              >
                DIRECTING
              </h5>
            </Link>
          </div>
        </BackgroundImage>
        {/* <Img fluid={img.fluid}/> */}
      </Layout>
    </div>
  )
}
