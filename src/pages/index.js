import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import LinkButton from '../components/linkButton'
import WorksPickUp from '../components/worksPickUp'

import '../style/pages/index/index.scss'

import Face from '../components/face';
import Logo from '../images/logo.svg';
import Fox from '../images/fox-logo.svg';

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove (event) {
    // let svg = React.findDOMNode(this.refs.svg);
    // let rect = svg.getBoundingClientRect();
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    console.log(this.props.data)
    return (
      <Layout>
          <div className="index-wrapper">
            <div className="index-hero" onMouseMove={this.handleMouseMove.bind(this)}>
              <div className="left" data-color="pink">
                <nav className="navigation">
                  <ul className="headernav-list">
                    <li className="item">
                      <Link className="link" to="" data-text="true">About</Link>
                    </li>
                    <li className="item">
                      <Link className="link" to="" data-text="true">Works</Link>
                    </li>
                    <li className="item">
                      <Link className="link" to="" data-text="true">Github</Link>
                    </li>
                    <li className="item">
                      <Link className="link" to="" data-text="true">LinkedIn</Link>
                    </li>
                  </ul>
                </nav>
                <img className="hero-logo" src={Logo} alt=""/>
                <Face className="hero-face" x={this.state.x} y={this.state.y}/>
              </div>
              <div className="right">
                <div className="hero-message">
                  <p className="greeting" data-text="true">Hi, I'm</p>
                  <h1 className="name" data-text="true">Kotaro</h1>
                  <h3 className="job" data-text="true">Front-end Developer</h3>
                </div>
              </div>
            </div>

          <main className="index-main">
            <Heading text="Kotaro Morooka"/>
            <div className="index-about">
              <img className="logo" src={Fox} alt=""/>
              <div className="right">
                <div className="text" data-text="true">
                  text texttext textext text text text ext text text text text text text ext txt text textext text text text text text text text text text text text text text text txt text text text text text text text 
                </div>
                <LinkButton link="#" text="About me"/>
              </div>
            </div>

            <Heading text="My works" />
            <WorksPickUp works={this.props.data.webJson.webWorks} />
            <WorksPickUp works={this.props.data.motionJson.motionWorks} />
          </main>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    webJson {
      webWorks {
        name
        images
      }
    }
    motionJson {
      motionWorks {
        name
        created
        description
        tools
        images
      }
    }
  }
`
