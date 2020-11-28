import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import ContainerI from '../components/containerImg'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/choreo.css'

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
          <h6>CHOREOGRAPHY</h6>
        </div>
        <br />
        <div id='choreo'>
          {choreo.map((work, index) => (
            <ContainerI>
              <div key={index}>
                <Link to={`/choreo/${work.node.titleUrl}`}>
                  <h6 style={{ textAlign: 'center' }}>{work.node.title}</h6>
                  <Img
                    fluid={work.node.thumbnail.fluid}
                    alt="pictures of choreo work"
                    className="rounded-lg"
                  />
                </Link>
                <p style={{ textAlign: 'center' }}>{work.node.director}</p>
                <div>
                  <Link to={`/`}>{home}</Link> |{' '}
                  <Link to={`/directing/`}>{direct}</Link>
                </div>
                <br />
              </div>
            </ContainerI>
          ))}
        </div>
      </Layout>
    </div>
  )
}
