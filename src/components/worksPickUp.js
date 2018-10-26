import React from 'react'
import LinkButton from './linkButton'

import WorksPickUpItem from './WorksPickUpItem'

class worksPickUp extends React.Component {

  

  render() {

    return (
      <section className="works-pickup">
        <h2 className="heading" data-hovertype="text">{this.props.heading}</h2>
        <ul className="pickup-list">
          {this.props.works.slice(0, 3).map((work, key) => {
            return (
              <WorksPickUpItem work={work} key={key} />
            )
          })}
        </ul>
        <LinkButton text="Show more" link="works"/>
      </section>
    )
  }
}

export default worksPickUp
