import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
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
  const home = 'home'
  const direct = 'directing'

  return (
    <div>
      <Layout>
        <div>
          <h6 className="cheader">CHOREOGRAPHY</h6>
        </div>
        <div className="csub">
          <Link to={`/`}>{home}</Link> |{' '}
          <Link to={`/directing/`}>{direct}</Link>
        </div>
        <br />
        <div id="choreo">
          {choreo.map((work, index) => (
            <ContainerI>
              <div key={index}>
                <Link to={`/choreo/${work.node.titleUrl}`}>
                  <p className="titles">{work.node.title}</p>
                  <Img
                    className="cv"
                    fluid={work.node.thumbnail.fluid}
                    alt="pictures of choreo work"
                    className="rounded-lg"
                  />
                </Link>
                <p className="director">{work.node.director}</p>
                <br />
              </div>
            </ContainerI>
          ))}
        </div>
      </Layout>
    </div>
  )
}
