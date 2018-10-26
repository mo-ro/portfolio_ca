import React from 'react'
import LinkButton from './linkButton'

import WorksPickUpItem from './WorksPickUpItem'

class worksPickUp extends React.Component {

  

  render() {

    return (
      <section className="works-pickup">
        <h2 className="heading">{this.props.heading}</h2>
        <ul className="pickup-list">
          {this.props.works.slice(0, 3).map((work) => {
            return (
              <WorksPickUpItem work={work} />
            )
          })}
        </ul>
        <LinkButton text="Show more" link="works"/>
      </section>
    )
  }
}

export default worksPickUp
