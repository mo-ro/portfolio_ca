import React from 'react'
import { Link } from 'gatsby'

class linkButton extends React.Component {
  render() {
    return (
      <div className="link-button" data-color="pink">
        <Link className="text" to={this.props.link}>
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default linkButton