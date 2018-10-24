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
      background: '#fff',
      scale: 1,
      opacity: 1
    }
  }

  renderPointer(event) {
    // console.log(event.target.getAttribute('data-color'))
      this.setState({
        x: event.clientX,
        y: event.clientY,
        background: (event.target.getAttribute('data-color') === 'pink' ? '#fff' : '#f73859'),
        scale: (event.target.getAttribute('data-text') ? '1.8' : '1'),
        opacity: (event.target.getAttribute('data-text') ? '.3' : '1'),
      })
  }

  onMouseDown(event) {
    this.setState({
      scale: 1.8,
      opacity: .3
    })
  }

  onMouseUp(event) {
    this.setState({
      scale: 1,
      opacity: 1
    })
  }

  render() {
    let pointerStyle = {
      transform: `translate(${this.state.x}px, ${this.state.y}px) scale(${this.state.scale})`,
      background: this.state.background,
      opacity: this.state.opacity
    }
    // console.log(this.site.allWorksJson)

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            },
            allWorksJson {
              edges {
                node {
                  work {
                    title
                  }
                }
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
            <div className="grobal-container" onMouseMove={this.renderPointer.bind(this)} onMouseDown={this.onMouseDown.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
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
