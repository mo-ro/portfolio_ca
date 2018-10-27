import React from 'react'

class underLineHeading extends React.Component {
  render() {
    return (
      <h3 className="underline-heading" data-hovertype="text">{this.props.heading}</h3>
    )
  }
}

export default underLineHeading