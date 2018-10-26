import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo-black.svg'

class Header extends React.Component {
  render() {
    return (
      <header className="grobal-header">
        <div className="left">
          <img className="logo" src={Logo} alt=""/>
        </div>
        <div className="right">
          <ul className="grobal-header-list">
            <li className="item">
              <Link to="about" className="link">About</Link>
            </li>
            <li className="item">
              <Link to="works" className="link">Works</Link>
            </li>
            <li className="item">
              <a href="https://github.com/mo-ro" className="link" target="_blank">GitHub</a>
            </li>
            <li className="item">
              <a href="" className="link">LinkedIn</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
