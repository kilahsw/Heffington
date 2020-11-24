import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function Choreo() {
  const data = useStaticQuery(graphql`
    {
      allContentfulChoreography {
        edges {
          node {
            title
            titleUrl
            thumbnail {
              fluid(maxWidth: 900, quality: 100) {
                ...GatsbyContentfulFluid
              }
              id
            }
            director
          }
        }
      }
    }
  `)
  console.log(data)

  //array
  const choreo = data.allContentfulChoreography.edges

  return (
    <div>
      <Layout>
        <div>
          {choreo.map((work, index) => (
            <div key={index}>
              <Link to={`/choreo/${work.node.titleUrl}`}>
                <h3>{work.node.title}</h3>
                <Img fluid={work.node.thumbnail.fluid} />
              </Link>
              <h6>{work.node.director}</h6>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
