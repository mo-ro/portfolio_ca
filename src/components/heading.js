import React from 'react'

class Heading extends React.Component {
  render() {
    return (
      <div className="grobal-heading" data-text="true">
        {this.props.text}
      </div>
    )
  }
}

export default Heading