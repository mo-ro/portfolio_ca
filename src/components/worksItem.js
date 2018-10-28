import React from 'react'

class worksItem extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const image = require(`../images/${this.props.work.images[0]}`)

    return (
      <li className="works-item">
        <figure className="figure">
          <img className="image" src={image} alt=""/>
        </figure>
        <div className="textarea">
          <h3 className="name">{this.props.work.name}</h3>
          <div className="description">{this.props.work.description}</div>
          <div className="date">{this.props.work.created}</div>
        </div>
      </li>
    )
  }
}

export default worksItem