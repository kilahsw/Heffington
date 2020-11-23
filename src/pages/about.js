import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

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
  const bio = data.allContentfulBio.edges[0].node.body.body

  return (
    <div>
      <Layout>
        <div>
          <Img fluid={img.fluid} />
          <p>{bio}</p>
        </div>
      </Layout>
    </div>
  )
}
