import React from 'react'
import LinkButton from './linkButton'

import WorksPickUpItem from './WorksPickUpItem'

class worksPickUp extends React.Component {

  

  render() {
    return (
      <section className="works-pickup">
        <h2 className="heading" data-hovertype="text">{this.props.heading}</h2>
        <ul className="pickup-list">
          {this.props.worksData.works.slice(0, 3).map((work, index) => {
            return (
              <WorksPickUpItem work={work} type={this.props.worksData.type} index={index+1} key={index} />
            )
          })}
        </ul>
        <LinkButton text="Show more" link="works"/>
      </section>
    )
  }
}

export default worksPickUp
