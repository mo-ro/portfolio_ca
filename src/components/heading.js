import React from 'react'

class Heading extends React.Component {
  render() {
    return (
      <h2 className="grobal-heading" data-type={this.props.type} data-text="true">
        {this.props.text}
      </h2>
    )
  }
}

export default Heading