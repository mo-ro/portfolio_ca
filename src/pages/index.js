import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import LinkButton from '../components/linkButton'

import '../style/pages/index/index.scss'

import Face from '../components/face';
import Logo from '../images/logo.svg';
import Fox from '../images/fox-logo.svg';

const IndexPage = () => (
  <Layout>
    <div className="index-wrapper">
      <div className="index-hero">
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
          <Face className="hero-face"/>
        </div>
        <div className="right">
          <div className="hero-message">
            <p className="greeting" data-text="true">Hi, I'm</p>
            <h1 className="name" data-color="pink" data-text="true">Kotaro</h1>
            <h3 className="job" data-text="true">Front-end Developer</h3>
          </div>
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
    </main>
  </Layout>
)

export default IndexPage
