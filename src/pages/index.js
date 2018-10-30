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
      scrollAmount: 0,
      isHero: true,
      isMain: false,
      mainDisplay: false
    }
  }

  openWheel(event) {
    event.persist()
      if(event.deltaY > 0 && event.deltaY > this.state.scrollAmount) {
        let delta
        if(event.deltaY > 10) {
          delta = 10
        } else {
          delta = event.deltaY
        }
        this.setState({
          scrollAmount: delta
        })
      }

    if(event.deltaY > 10) {
      setTimeout(() => {
        this.setState({
          isHero: false,
          mainDisplay: true
        })
      }, 800);
      
      setTimeout(() => {
        this.setState({
          isMain: true
        })
      }, 1000);
      // window.scrollTop = 0
    }
  }

  closeWheel(event) {
    console.log(event.deltaY)
    this.setState({
      scrollAmount: 0
    })
    if(window.pageYOffset === 0 && event.deltaY < -10) {
      setTimeout(() => {
        this.setState({
          isHero: true,
          mainDisplay: false
        })
      }, 600);

      setTimeout(() => {
        this.setState({
          isMain: false
        })
      }, 400);
    }
  }

  handleMouseMove (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });

  }

  render() {
    let circleRate = this.state.scrollAmount / 10 * 150
    let heroStyle = this.state.isHero ? {
      transform: 'translate(0, 0) scale(1)',
      opacity: 1
    } : {
      transform: 'translate(0, -20px) scale(1)',
      opacity: 0,
      pointerEvents: 'none'
    }
    let mainStyle = this.state.isMain ? {
      opacity: 1,
      transform: 'translate(0, 0) scale(.95)',
    } : {
      opacity: 0,
      transform: 'translate(0, 0px) scale(1)',
    }
    let circleStyle = {
      transform: `rotate(${circleRate}deg)`
    }

    let mainDisplayStyle = this.state.mainDisplay ? {
      display: 'block'
    } : {
      display: 'none'
    }

    return (
      <Layout>
        <PageTransition>
          <div className="index-wrapper">
            <div className="index-hero" style={heroStyle} onWheel={this.openWheel.bind(this)} id="hero" onMouseMove={this.handleMouseMove.bind(this)}>
              <div className="left" data-hovertype="pink">
                {/* <nav className="navigation">
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
                </nav> */}
                <img className="hero-logo" src={Logo} alt=""/>
                <Face className="hero-face" x={this.state.x} y={this.state.y}/>
              </div>
              <div className="right">
                <div className="hero-message">
                  <p className="greeting" data-hovertype="text">Hi, I<span className="span">'</span>m</p>
                  <h1 className="name" data-hovertype="text">Kotaro</h1>
                  <h3 className="job" data-hovertype="text">Front-end Developer</h3>
                </div>
                <div className="scroll-circle">
                  <div className="progress" style={circleStyle}></div>
                </div>
              </div>
            </div>

            <main className="index-main" id="main" style={Object.assign({}, mainStyle, mainDisplayStyle)} onWheel={this.closeWheel.bind(this)}>
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
