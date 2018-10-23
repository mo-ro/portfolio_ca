import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import '../style/pages/index/index.scss'
import Face from '../components/face';

const IndexPage = () => (
  <Layout>
    <div className="index-wrapper">
      <div className="index-hero">
        <div className="left">
          <nav className="navigation">
            <ul className="headernav-list">
              <li className="item">
                <Link className="link" to="">About</Link>
              </li>
              <li className="item">
                <Link className="link" to="">Works</Link>
              </li>
              <li className="item">
                <Link className="link" to="">Twitter</Link>
              </li>
              <li className="item">
                <Link className="link" to="">LinkedIn</Link>
              </li>
            </ul>
          </nav>
          <Face className="hero-face"/>
        </div>
        <div className="right">
          <div className="hero-message">
            <p className="greeting">Hi, I'm</p>
            <h1 className="name">Kotaro</h1>
            <h3 className="job">Front-end Developer</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
