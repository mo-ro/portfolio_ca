import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo-black.svg'

let headerStyle

class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      isScroll: false
    }
  }

  // componentDidMount() {
  //   headerStyle = (window.pageYOffset > 0) ? {
  //     boxShadow: '0 2px 8px rgba(0, 0, 0, .3)',
  //     background: 'rgba(255, 255, 255, .9)',
  //   } : {
  //     boxShadow: '0 0 0 rgba(0, 0, 0, .3)',
  //     background: 'rgba(255, 255, 255, 0)'
  //   }
  // }

  render() {
    
    return (
      <header className="grobal-header" data-hovertype="header" style={headerStyle}>
        <div className="left">
          <Link to="/">
            <img className="logo" src={Logo} alt=""/>
          </Link>
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
              <a href="https://github.com/mo-ro" className="link">GitHub</a>
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
