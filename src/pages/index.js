import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import './index.css'

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
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div>
          <Img fluid={img.fluid} />
        </div>
        <div>
          <Link to={`/about/`}>
            <h5
              css={`
                display: inline-block;
              `}
            >
              ABOUT
            </h5>
          </Link>
          <Link to={`/choreo/`}>
            <h5
              css={`
                display: inline-block;
              `}
            >
              CHOREOGRAPHY
            </h5>
          </Link>
          <Link to={`/directing/`}>
            <h5
              css={`
                display: inline-block;
              `}
            >
              DIRECTING
            </h5>
          </Link>
        </div>
      </Layout>
    </div>
  )
}
