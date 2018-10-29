import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';


class worksPickUpItem extends React.Component {

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

    let coverStyle = {
      transform: `scale(${this.state.scale})`,
      top: this.state.y,
      left: this.state.x
    }

    const link = `/works/${this.props.type}/${this.props.index}`

    return (
      <Link className="item" to={link} >
        <figure className="figure" data-hovertype="link" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
          <img className="image" src={image} alt=""/>
          <div className="cover" style={coverStyle}></div>
        </figure>
        <h3 className="name" data-hovertype="text">{this.props.work.name}</h3>
      </Link>
    )
  }
}

export default worksPickUpItem