import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from './header'
import Footer from './footer'
import BottomNav from './bottomNav'

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      hovertype: 'default',
      active: null
    }
    this.path = null
  }

  componentDidMount() {
    this.path = this.props.children._owner.key.replace(/\//g, '')

    this.setState({
      active: this.path
    })
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

      case 'header':
        pointerStyle = {
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1.6) rotate(45deg)`,
          background: '#f73859',
          opacity: 1
        }
      break;

      case 'global-link':
        pointerStyle = {
          borderRadius: 0,
          boxSizing: 'border-box',
          transform: `translate(${this.state.x}px, ${this.state.y}px) scale(1) rotate(0deg)`,
          // background: '#f73859',
          border: '2px solid #f73859',
          width: '84px',
          height: '28px',
          left: '-42px',
          top: '-20px',
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
                  { name: 'description', content: data.site.siteMetadata.description },
                  { property: 'og:title', content: data.site.siteMetadata.title },
                  { property: 'og:type', content: 'website' },
                  { property: 'og:url', content: data.site.siteMetadata.url },
                  { property: 'og:image', content: data.site.siteMetadata.image },
                  { property: 'og:description', content: data.site.siteMetadata.description },
                  {property: "og:site_name", content: data.site.siteMetadata.name},
                  { name: 'twitter:card', content: 'summary_large_image' },
                  { name: 'twitter:site', content: '@alignItems' }
                ]}
              >
                <html lang="en" />
              </Helmet>
              <div className="grobal-container" onMouseMove={this.renderPointer.bind(this)} onMouseDown={this.onMouseDown.bind(this)} onMouseUp={this.onMouseUp.bind(this)}>
              <Header data={data} active={this.state.active} />
                <PageTransition
                defaultStyle={{
                  transition: 'all 250ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                  left: '4px',
                  opacity: 0,
                  // overflow: 'hidden',
                  position: 'absolute',
                  width: '100%',
                }}
                transitionStyles={{
                  entering: { left: '0%', opacity: 1 },
                  entered: { left: '0%', opacity: 1 }
                }}
                transitionTime={250}>
                  {this.props.children}
                  <Footer />
                </PageTransition>
              </div>
              <div className="pointer" style={pointerStyle}></div>
              <BottomNav active={this.state.active} />
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
