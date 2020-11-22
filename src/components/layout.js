import React from 'react'
import { Link, graphql } from 'gatsby'
// import Container from './container'
// import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    console.log(children)
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div></div>
     )
  }
}

export default Template

//return   // <Container>
      //   <Navigation />
      //   {children}
      // </Container>
