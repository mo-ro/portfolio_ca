import React from 'react'
import { Link } from 'gatsby'

import homeImg from '../images/home.svg'
import aboutImg from '../images/about.svg'
import worksImg from '../images/works.svg'

class BottomNav extends React.Component {
  render() {
    return (
      <nav className="bottom-nav">
        <Link to="/" className="link">
          <img src={homeImg} alt="" className="img"/>
          <div className="text">Home</div>
        </Link>
        <Link to="/about" className="link">
          <img src={aboutImg} alt="" className="img"/>
          <div className="text">About</div>
        </Link>
        <Link to="/works" className="link">
          <img src={worksImg} alt="" className="img"/>
          <div className="text">Works</div>
        </Link>
      </nav>
    )
  }
}

export default BottomNav