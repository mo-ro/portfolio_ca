import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'
import UnderLineHeading from '../components/underLineHeading'

import '../style/pages/about/index.scss'
import logo from '../images/logo-black.svg'
import coding from '../images/coding.svg'
import frontEnd from '../images/front-end.svg'
import motion from '../images/motion-graphics.svg'
import design from '../images/design.svg'

class About extends React.Component {

  render() {
    return (
      <Layout>
          <main className="about-wrapper">
            <Heading text="About me" />
            <div className="about-introduction">
              <div className="left">
                <p className="summary" data-hovertype="text">
                  I've always sought out the latest web development technologies, and have a passion for development.
                </p>
                <p className="text" data-hovertype="text">
                  I have over 2 years experience of web development as a front-end developer. I also have skills such as designing and motion graphics, hence I create logos and motion UI.
                </p>
                <p className="text" data-hovertype="text">
                  I've been learning, snce I found out "Front-end". At the present time, I'm studying English in Canada so as to learn more about web development at college in Vancouber. I hope I'll find a job as a web developer, and play an active part in the web industry.
                </p>
              </div>
              <div className="right">
                <img className="logo" src={logo} alt=""/>
              </div>
            </div>
            <Heading text="Skills" />
            <ul className="skill-list">
              <li className="item">
                <UnderLineHeading heading="Coding" />
                <figure className="figure">
                  <img className="image" src={coding} alt="" data-hovertype="text"/>
                </figure>
                <div className="skill" data-hovertype="text">HTML5 / CSS3 /SASS / Pug / Gulp / TweenMax / jQuery / BEM / OSCSS</div>
              </li>
              <li className="item">
                <UnderLineHeading heading="Front-end" />
                <figure className="figure">
                  <img className="image" src={frontEnd} alt="" data-hovertype="text"/>
                </figure>
                <div className="skill" data-hovertype="text">React / Redux / TypeScript / Vue / Gatsby / GraphQL / Webpack </div>
              </li>
              <li className="item">
                <UnderLineHeading heading="Motion Graphics" />
                <figure className="figure">
                  <img className="image" src={motion} alt="" data-hovertype="text"/>
                </figure>
                <div className="skill" data-hovertype="text">After Effects</div>
              </li>
              <li className="item">
                <UnderLineHeading heading="Design" />
                <figure className="figure">
                  <img className="image" src={design} alt="" data-hovertype="text"/>
                </figure>
                <div className="skill" data-hovertype="text">Illustrator / Sketch / Photoshop / Figma / Adobe XD</div>
              </li>
            </ul>
          </main>
      </Layout>
    )
  }
}

export default About