import React from 'react'

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
    event.persist()
    this.setState({
      scale: 2,
      x: event.pageX - event.target.offsetLeft,
      y: event.pageY - event.target.offsetTop
    })
    console.log(this.state)

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

    return (
      <li className="item">
        <figure className="figure" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
          <img className="image" src={image} alt=""/>
          <div className="cover" style={coverStyle}></div>
        </figure>
        <h3 className="name">{this.props.work.name}</h3>
      </li>
    )
  }
}

export default worksPickUpItem