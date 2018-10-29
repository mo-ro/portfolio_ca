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
      hovertype: 'default'
    }
  }

  componentDidMount(event) {
    
  }

  renderPointer(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY,
        hovertype: (event.target.getAttribute('data-hovertype')),
      })
  }

  onMouseDown(event) {
    // this.setState({
    //   scale: 1.8,
    //   opacity: .3
    // })
  }

  onMouseUp(event) {
    // this.setState({
    //   scale: 1,
    //   opacity: 1
    // })
  }

  setPointerStyle() {
    let pointerStyle = null

    switch (this.state.hovertype) {
      
      case 'text':
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1.8) rotate(45deg)`,
          background: '#f73859',
          opacity: .3
        }
        break;

      case 'pink':
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1) rotate(45deg)`,
          background: '#fff',
          opacity: 1
        }
      break;

      case 'link':
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1) rotate(45deg)`,
          background: 'transparent',
          borderTop: '4px solid #f73859',
          borderRight: '4px solid #f73859',
          borderRadius: 0,
          width: 10,
          height: 10,
          opacity: 1,
        }
      break;

      case 'link-white':
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1) rotate(45deg)`,
          background: 'transparent',
          borderTop: '4px solid #fff',
          borderRight: '4px solid #fff',
          borderRadius: 0,
          width: 10,
          height: 10,
          opacity: 1,
        }
      break;

      case 'default':
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1) rotate(45deg)`,
          background: '#fff',
          opacity: 0
        }

        break;
    
      default:
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1) rotate(45deg)`,
          background: '#f73859',
          opacity: 1
        }
        break;

    }

    return pointerStyle

  }

  render() {
    let pointerStyle = this.setPointerStyle()

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
