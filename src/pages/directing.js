import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function Directing() {
  const data = useStaticQuery(graphql`
    {
      allContentfulDirecting {
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
          }
        }
      }
    }
  `)
  console.log(data)

  //array
  const direct = data.allContentfulDirecting.edges

  return (
    <div>
      <Layout>
        <div>
          {direct.map((work, index) => (
            <div key={index}>
              <Link to={`/directing/${work.node.titleUrl}`}>
                <h3>{work.node.title}</h3>
                <Img fluid={work.node.thumbnail.fluid} />
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
