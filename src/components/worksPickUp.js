import React from 'react'

class worksPickUp extends React.Component {
  render() {
    console.log(this.props.works)
    return (
      <div>{this.props.works[0].name}</div>
    )
  }
}

export default worksPickUp

// export const query = graphql`
//   query {
//     webJson {
//       webWorks {
//         name
//         created
//         description
//         url
//         tools
//         images
//         github
//       }
//     }
//     motionJson {
//       motionWorks {
//         name
//         created
//         description
//         tools
//         images
//       }
//     }
//   }
// `
