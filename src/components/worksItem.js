import React from 'react'
import { Link } from 'gatsby'

import ReactDOM from 'react-dom';

class worksItem extends React.Component {

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
      scale: 0
    })
  }

  render() {
    const image = require(`../images/${this.props.work.images[0]}`)
    const link = `/works/${this.props.type}/${this.props.index}`

    let coverStyle = {
      transform: `scale(${this.state.scale})`,
      top: this.state.y,
      left: this.state.x
    }

    return (
      <Link className="works-item" to={link} data-hovertype="link-white" onMouseMove={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <figure className="figure">
          <img className="image" src={image} alt=""/>
        </figure>
        <div className="textarea">
          <h3 className="name">{this.props.work.name}</h3>
          <div className="description">{this.props.work.description}</div>
          <div className="date">{this.props.work.created}</div>
        </div>
        <div className="cover" style={coverStyle}></div>
      </Link>
    )
  }
}

export default worksItem