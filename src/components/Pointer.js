import React from 'react'

class Pointer extends React.Component {

  render() {
    return (
      <div className="pointer" onMouseMove={this.renderPointer.bind(this)}></div>
    )
  }
}

export default Pointer