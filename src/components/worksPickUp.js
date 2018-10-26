import React from 'react'
import LinkButton from './linkButton'

class worksPickUp extends React.Component {
  render() {
    return (
      <section className="works-pickup">
        <h2 className="heading">{this.props.heading}</h2>
        <ul className="pickup-list">
          {this.props.works.slice(0, 3).map((work) => {
            const image = require(`../images/${work.images[0]}`)
            console.log(image)
            return (
              <li className="item">
                <figure className="figure">
                  <img className="image" src={image} alt=""/>
                </figure>
                <h3 className="name">{work.name}</h3>
              </li>
            )
          })}
        </ul>
        <LinkButton text="Show more" link="works"/>
      </section>
    )
  }
}

export default worksPickUp
