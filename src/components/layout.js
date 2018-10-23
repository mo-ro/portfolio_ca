import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      background: '#fff'
    }
  }

  renderPointer(event) {
    // console.log(event.target.getAttribute('data-color'))
      this.setState({
        x: event.clientX,
        y: event.clientY,
        background: (event.target.getAttribute('data-color') === 'pink' ? '#fff' : '#f73859')
      })
  }

  render() {
    let pointerStyle = {
      transform: `translate(${this.state.x}px, ${this.state.y}px)`,
      background: this.state.background
    }

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="grobal-container" onMouseMove={this.renderPointer.bind(this)}>
              {this.props.children}
            </div>
            <div className="pointer" style={pointerStyle}></div>
          </>
        )}
      />
    )
  }
}

// const Layout = ({ children }) => (
  
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
