import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import LinkButton from '../components/linkButton'
import WorksPickUp from '../components/worksPickUp'

import '../style/pages/index/index.scss'

import Face from '../components/face'
import Logo from '../images/logo.svg'
import Fox from '../images/fox-logo.svg'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      scrollAmount: 0,
      isHero: true,
      isMain: false,
      mainDisplay: false,
      scrollText: "Scroll softly, please...",
      ua: 'pc'
    }
  }

  componentDidMount() {
    var getDevice = (function(){
      var ua = navigator.userAgent;
      if((ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0){
          return 'sp';
      }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
          return 'tab';
      }else{
          return 'pc';
      }
    })();

    this.setState({
      ua: getDevice
    })
  }

  closeWheel(event) {
    if(window.pageYOffset === 0 && event.deltaY < 0) {
      this.setState({
        scrollAmount: 0,
        scrollText: "Scroll softly, please..."
      })
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
    } else if (window.pageYOffset === 0 && event.deltaY > 0) {
      this.setState({
        scrollAmount: 1,
      })
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

      if(event.deltaY < 2 && this.state.scrollAmount === 0) {
        this.setState({
          scrollText: "Thanks!"
        })
      } else if(this.state.scrollAmount === 0) {
        this.setState({
          scrollText: "Wow!"
        })
      }
    }
  }

  handleMouseMove (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });

  }

  render() {
    let circleRate = this.state.scrollAmount * 150
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
      transform: 'translate(0, 0) scale(1)',
    } : {
      opacity: 0,
      transform: 'translate(0, 0px) scale(1.05)',
    }
    let circleStyle = {
      transform: `rotate(${circleRate}deg)`,
      backgroundColor: ((circleRate === 150) ? 'rgba(247, 56, 89, .2)' : 'rgba(247, 56, 89, 0)')
    }

    let mainDisplayStyle = this.state.mainDisplay ? {
      display: 'block'
    } : {
      display: 'none'
    }

    return (
      <Layout>
      {this.state.ua === 'pc' ?
        <div className="index-wrapper">
          <div className="index-hero" style={heroStyle} onTouchMove={this.closeWheel.bind(this)} onWheel={this.closeWheel.bind(this)} id="hero" onMouseMove={this.handleMouseMove.bind(this)}>
            <div className="left" data-hovertype="pink">
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
                <p className="text" data-hovertype="text">{this.state.scrollText}</p>
              </div>
            </div>
          </div>

          <main className="index-main" id="main" style={Object.assign({}, mainStyle, mainDisplayStyle)} onWheel={this.closeWheel.bind(this)}>
            <Heading text="Kotaro Morooka"/>
            <div className="index-about">
              <img className="logo" src={Fox} alt=""/>
              <div className="right">
                <div className="text" data-hovertype="text">
                  Welcome to my amazing protfolio site!
                  I hope you guys appreciate my works, and I really want you to enjoy for my site.
                  <br />
                  I'm a front-end developer, but there's not only works of web development, also  a lot of sophisticated motion graphics or illustrations.
                </div>
                <LinkButton link="/about" text="About me"/>
              </div>
            </div>

            <Heading text="My works" />
            <WorksPickUp worksData={this.props.data.webJson} heading="Web" />
            <WorksPickUp worksData={this.props.data.motionJson} heading="Motion" />
            <WorksPickUp worksData={this.props.data.illustJson} heading="Illust" />
          </main>
        </div> :

        <div className="index-wrapper">
          <div className="index-hero" id="hero">
            <div className="left" data-hovertype="pink">
              <img className="hero-logo" src={Logo} alt=""/>
              <Face className="hero-face"/>
            </div>
            <div className="right">
              <div className="hero-message">
                <p className="greeting" data-hovertype="text">Hi, I<span className="span">'</span>m</p>
                <h1 className="name" data-hovertype="text">Kotaro</h1>
                <h3 className="job" data-hovertype="text">Front-end Developer</h3>
              </div>
            </div>
          </div>

          <main className="index-main" id="main">
            <Heading text="Kotaro Morooka"/>
            <div className="index-about">
              <img className="logo" src={Fox} alt=""/>
              <div className="right">
                <div className="text" data-hovertype="text">
                  Welcome to my amazing protfolio site!
                  I hope you guys appreciate my works, and I really want you to enjoy for my site.
                  <br />
                  I'm a front-end developer, but there's not only works of web development, also  a lot of sophisticated motion graphics or illustrations.
                </div>
                <LinkButton link="/about" text="About me"/>
              </div>
            </div>

            <Heading text="My works" />
            <WorksPickUp worksData={this.props.data.webJson} heading="Web" />
            <WorksPickUp worksData={this.props.data.motionJson} heading="Motion" />
            <WorksPickUp worksData={this.props.data.illustJson} heading="Illust" />
          </main>
        </div>}
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
