import React, { useState, useEffect } from 'react'
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
  
  return (
    <div>
      <Layout>
        <BackgroundImage
          className="hero"
          fluid={img.fluid}
          {...(typeof window !== 'undefined' && window.innerWidth
            ? window.innerWidth < 1024
              ? data.allContentfulPerson.edges[0].node.image
              : data.allContentfulPerson.edges[0].node.imageDesk
            : null)}
        >
          <h1 className="name">{title}</h1>
          <br />
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


//original ternary for window pic change - i feel like this could work if i could figure out wher to put the window !== 'undefined' statement. It would have to come before the const was declared...

// const changePic = window.innerWidth
// {...(changePic < 1024
          //   ? data.allContentfulPerson.edges[0].node.image
          //   : data.allContentfulPerson.edges[0].node.imageDesk)}

//failed useEffect and useState

// const [changePic, setChangePic] = useState({
  //   width: 0,
  // })

  // useEffect(() => {
  //   function handleResize() {
  //     setChangePic({
  //       width: window.innerwidth
  //     })
  //   }
  //   window.addEventListener("change", handleResize)
  //   handleResize()
  // }, [])