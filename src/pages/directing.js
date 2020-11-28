import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  const home = 'HOME'
  const choreo = 'CHOREOGRAPHY'

  return (
    <div>
      <Layout>
        <div>
          <div className="dirheader" style={{ textAlign: 'center' }}>
            <h1>DIRECTING</h1>
            <br />
          </div>
          {direct.map((work, index) => (
            <div key={index}>
              <Link to={`/directing/${work.node.titleUrl}`}>
                <h3 style={{ textAlign: 'center' }}>{work.node.title}</h3>
                <Img
                  fluid={work.node.thumbnail.fluid}
                  alt="pictures of directing work"
                  className="rounded"
                />
              </Link>
              <br />
              <div>
                <Link to={`/`}>{home}</Link> |{' '}
                <Link to={`/choreo/`}>{choreo}</Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}
