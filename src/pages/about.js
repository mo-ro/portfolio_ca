import React from 'react'

import Layout from '../components/layout'
import Heading from '../components/heading'

class About extends React.Component {
  constructor() {
    return (
      <Layout>
        <div className="about-wrapper">
          <Heading text="About me" />
        </div>
      </Layout>
    )
  }
}

export default About