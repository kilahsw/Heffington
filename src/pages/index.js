import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'

import '../css/index.css'

// export function ScreenSize() {
//   const [screenSize, setScreenSize] = useState({
//     width: 1024,
//     height: 768,
//   })
//   screenSize = () => {}
// }

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
            imageDesk {
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
  const imgDesk = data.allContentfulPerson.edges[0].node.imageDesk
  const title = data.allContentfulPerson.edges[0].node.title
  const subtitle = data.allContentfulPerson.edges[0].node.subtitle
  // const changePic = window.innerWidth
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  )
}

//// {...(changePic <= 800
//   ? data.allContentfulPerson.edges[0].node.image
//   : data.allContentfulPerson.edges[0].node.imageDesk)}
