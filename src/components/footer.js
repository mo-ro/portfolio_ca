import React from 'react'

import moai from '../images/moai.svg'

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="global-footer">
        <div className="left">
          <img className="img" src={moai} alt=""/>
        </div>
        <div className="right">
          <a className="link" href="https://www.linkedin.com/in/kotaro-morooka" target="_blank" rel="noopener noreferrer" data-hovertype="global-link">LinkedIn</a>
          <a className="link" href="https://github.com/mo-ro" target="_blank" rel="noopener noreferrer" data-hovertype="global-link">GitHub</a>
          <a className="link" href="https://www.facebook.com/profile.php?id=100016374344473" target="_blank" rel="noopener noreferrer" data-hovertype="global-link">Facebook</a>
          <a className="link" href="https://twitter.com/alignItems" target="_blank" rel="noopener noreferrer" data-hovertype="global-link">Twitter</a>
        </div>
      </footer>
    )
  }
}

export default Footer