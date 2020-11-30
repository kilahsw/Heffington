import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import ContainerI from '../components/containerImg'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/directing.css'

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
  const home = 'home'
  const choreo = 'choreography'

  return (
    <div>
      <Layout>
        <div>
          <h6 className="dheader">DIRECTING</h6>
          <br />
        </div>
        <div className="dsub">
          <Link to={`/`}>{home}</Link> | <Link to={`/choreo/`}>{choreo}</Link>
        </div>
        <br />
        <div id="direct">
          {direct.map((work, index) => (
            <ContainerI>
              <div key={index}>
                <Link to={`/directing/${work.node.titleUrl}`}>
                  <p className="dtitles">{work.node.title}</p>
                  <Img
                    fluid={work.node.thumbnail.fluid}
                    alt="pictures of directing work"
                    className="rounded-lg"
                  />
                </Link>
                <br />
              </div>
            </ContainerI>
          ))}
        </div>
      </Layout>
    </div>
  )
}
