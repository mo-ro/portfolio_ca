import React from 'react'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';


import Layout from '../components/layout'
import Heading from '../components/heading'
import LinkButton from '../components/linkButton'
import WorksPickUp from '../components/worksPickUp'

import '../style/pages/index/index.scss'

import Face from '../components/face';
import Logo from '../images/logo.svg';
import Fox from '../images/fox-logo.svg';

class IndexPage extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      x: 0,
      y: 0,
      scrollFlg: false,
      isHero: true,
      isMain: false
    }
  }

  openWheel(event) {
    if(event.deltaY > 16) {
      this.setState({
        isHero: false
      })
      setTimeout(() => {
        this.setState({
          isMain: true
        })
      }, 300);
      // window.scrollTop = 0
    }
  }

  closeWheel(event) {
    if(window.pageYOffset === 0 && event.deltaY < -16) {
      this.setState({
        isHero: true
      })
      setTimeout(() => {
        this.setState({
          isMain: false
        })
      }, 500);
    }
  }

  handleMouseMove (event) {
    console.log(this.state)
    this.setState({
      x: event.clientX,
      y: event.clientY
    });

  }

  render() {
    // console.log(window.pageYOffset)
    let heroStyle = {
      transform: (this.state.isHero ? 'translate(0, 0)' : 'translate(0, -100%)')
    }
    let mainStyle = {
      display: (this.state.isMain ? 'block' : 'none')
    }
    return (
      <Layout>
        <PageTransition>
          <div className="index-wrapper">
            <div className="index-hero" style={heroStyle} onWheel={this.openWheel.bind(this)} id="hero" onMouseMove={this.handleMouseMove.bind(this)}>
              <div className="left" data-hovertype="pink">
                <nav className="navigation">
                  <ul className="headernav-list">
                    <li className="item">
                      <Link className="link" to="" data-hovertype="text">About</Link>
                    </li>
                    <li className="item">
                      <Link className="link" to="" data-hovertype="text">Works</Link>
                    </li>
                    <li className="item">
                      <a className="link" href="https://github.com/mo-ro" data-hovertype="text">GitHub</a>
                    </li>
                    <li className="item">
                      <a className="link" href="" data-hovertype="text">LinkedIn</a>
                    </li>
                  </ul>
                </nav>
                <img className="hero-logo" src={Logo} alt=""/>
                <Face className="hero-face" x={this.state.x} y={this.state.y}/>
              </div>
              <div className="right">
                <div className="hero-message">
                  <p className="greeting" data-hovertype="text">Hi, I<span className="span">'</span>m</p>
                  <h1 className="name" data-hovertype="text">Kotaro</h1>
                  <h3 className="job" data-hovertype="text">Front-end Developer</h3>
                </div>
              </div>
            </div>

            <main className="index-main" id="main" style={mainStyle} onWheel={this.closeWheel.bind(this)}>
              <Heading text="Kotaro Morooka"/>
              <div className="index-about">
                <img className="logo" src={Fox} alt=""/>
                <div className="right">
                  <div className="text" data-hovertype="text">
                    text texttext textext text text text ext text text text text text text ext txt text textext text text text text text text text text text text text text text text txt text text text text text text text 
                  </div>
                  <LinkButton link="/about" text="About me"/>
                </div>
              </div>

              <Heading text="My works" />
              <WorksPickUp worksData={this.props.data.webJson} heading="Web" />
              <WorksPickUp worksData={this.props.data.motionJson} heading="Motion" />
              <WorksPickUp worksData={this.props.data.illustJson} heading="Illust" />
            </main>
          </div>
        </PageTransition>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    webJson {
      type
      works {
        name
        images
      }
    }
    motionJson {
      type
      works {
        name
        created
        description
        tools
        images
      }
    }
    illustJson {
      type
      works {
        name
        images
      }
    }
  }
`
