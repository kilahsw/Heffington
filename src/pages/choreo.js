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
  const home = 'HOME'
  const direct = 'DIRECTING'

  return (
    <div>
      <Layout>
        <div className="chorheader" style={{ textAlign: 'center' }}>
          <h1>CHOREOGRAPHY</h1>
        </div>
        <br />
        <div>
          {choreo.map((work, index) => (
            <div key={index}>
              <Link to={`/choreo/${work.node.titleUrl}`}>
                <h3 style={{ textAlign: 'center' }}>{work.node.title}</h3>
                <Img fluid={work.node.thumbnail.fluid} />
              </Link>
              <h4 style={{ textAlign: 'right' }}>{work.node.director}</h4>
              <div>
                <Link to={`/`}>{home}</Link> |{' '}
                <Link to={`/directing/`}>{direct}</Link>
              </div>
              <br />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
