import React from 'react'
import LinkButton from './linkButton'

import WorksPickUpItem from './worksPickUpItem'

class worksPickUp extends React.Component {
  
  getIndex() {
    switch (this.props.worksData.type) {
      case 'web':
        return 0

      case 'motion':
        return 1

      case 'graphic':
        return 2
    
      default:
      break;
    }
  }

  render() {
    const index = this.getIndex()

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
        <LinkButton text="Show more" link="works" state={{index: index}}/>
      </section>
    )
  }
}

export default worksPickUp
