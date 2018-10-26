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
        render={data => {
          return(
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
              <div className="grobal-container" onMouseMove={this.renderPointer.bind(this)} onMouseDown={this.onMouseDown.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
              <Header data={data} />
                {this.props.children}
              </div>
              <div className="pointer" style={pointerStyle}></div>
            </>
          )
        }}
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
