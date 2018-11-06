import React from 'react'

class Heading extends React.Component {
  render() {
    return (
      <h2 className="global-heading" data-type={this.props.type} data-hovertype="text">
        {this.props.text}
      </h2>
    )
  }
}

export default Heading