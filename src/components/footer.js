import React from 'react'
import { Link } from 'gatsby'

import moai from '../images/moai.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer className="grobal-footer">
        <div className="left">
          <img className="img" src={moai} alt=""/>
        </div>
        <div className="right">
          <Link className="link" to="">LinkedIn</Link>
          <Link className="link" to="">Facebook</Link>
          <Link className="link" to="">Twitter</Link>
          <Link className="link" to="">Instagram</Link>
        </div>
      </footer>
    )
  }
}

export default Footer