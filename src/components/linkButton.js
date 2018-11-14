import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom'

class linkButton extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      scale: 0,
      x: 0,
      y: 0,
      buttonStyle: null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      buttonStyle: {
        transform: `scale(${state.scale})`,
        top: state.y,
        left: state.x,
      },
    }
  }

  onMouseEnter(event) {
    var eventDom = ReactDOM.findDOMNode(event.target).getBoundingClientRect()
    event.persist()
    this.setState({
      scale: 2,
      x: event.clientX - eventDom.left,
      y: event.clientY - eventDom.top,
    })
  }

  onMouseLeave(event) {
    this.setState({
      scale: 0,
    })
  }

  render() {
    return (
      <Link
        to={this.props.link}
        className="link-button"
        data-hovertype="link"
        onMouseMove={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        state={this.props.state}
      >
        <div className="text" data-color="pink">
          {this.props.text}
        </div>
        <div className="cover" style={this.state.buttonStyle} />
      </Link>
    )
  }
}

export default linkButton
