import React from 'react'
import { Link } from 'gatsby'

class worksItem extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const image = require(`../images/${this.props.work.images[0]}`)
    const link = `/works/${this.props.type}/${this.props.index}`

    return (
      <Link className="works-item" to={link}>
        <figure className="figure">
          <img className="image" src={image} alt=""/>
        </figure>
        <div className="textarea">
          <h3 className="name">{this.props.work.name}</h3>
          <div className="description">{this.props.work.description}</div>
          <div className="date">{this.props.work.created}</div>
        </div>
      </Link>
    )
  }
}

export default worksItem