import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo-black.svg'

let headerStyle

class Header extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    
    return (
      <header className="global-header" data-hovertype="header" style={headerStyle}>
        <div className="left" data-active={this.props.active === '' ? false : true}>
          <Link to="/">
            <img className="logo" src={Logo} alt=""/>
          </Link>
        </div>
        <div className="right">
          <ul className="global-header-list">
            <li className="item" data-active={this.props.active === '' ? false : true}>
              <Link to="/" className="link" data-hovertype="global-link">Home</Link>
            </li>
            <li className="item" data-active={this.props.active === 'about' ? false : true}>
              <Link to="about" className="link" data-hovertype="global-link">About</Link>
            </li>
            <li className="item" data-active={this.props.active === 'works' ? false : true}>
              <Link to="works" className="link" data-hovertype="global-link">Works</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
