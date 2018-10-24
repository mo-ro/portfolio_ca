import React from 'react'
import { Link } from 'gatsby'

class linkButton extends React.Component {

  constructor() {
    super();
    this.state = {
      scale: 0,
      x: 0,
      y: 0
    }
  }

  onMouseEnter(event) {
    event.persist()
    this.setState({
      scale: 2,
      x: event.pageX - event.target.offsetLeft,
      y: event.pageY - event.target.offsetTop
    })
  }

  onMouseLeave(event) {
    this.setState({
      scale: 0,
    })
  }

  render() {

    let buttonStyle = {
      transform: `scale(${this.state.scale})`,
      top: this.state.y,
      left: this.state.x
    }

    return (
      <Link to={this.props.link} className="link-button" data-color="pink" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <div className="text" data-color="pink">
          {this.props.text}
        </div>
        <div className="cover" style={buttonStyle}></div>
      </Link>
    )
  }
}

export default linkButton