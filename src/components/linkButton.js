import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';

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
    var eventDom = ReactDOM.findDOMNode(event.target).getBoundingClientRect();
    event.persist()
    this.setState({
      scale: 2,
      x: event.clientX - eventDom.left,
      y: event.clientY - eventDom.top
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
      <Link to={this.props.link} className="link-button" data-hovertype="link" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} state={this.props.state}>
        <div className="text" data-color="pink">
          {this.props.text}
        </div>
        <div className="cover" style={buttonStyle}></div>
      </Link>
    )
  }
}

export default linkButton