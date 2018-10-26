import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'


class workTemplate extends React.Component {
  render() {
    const data = this.props.pageContext.page;
    return (
      <Layout>
        <div className="workShow-wrapper">
          <Heading text="Motion Work"/>
          <main className="workShow-content">
            <div className="left">
              {data.images.map((image, key) => {
                const path = require(`../images/${image}`)
                return (
                  <img src={path} key={key} alt=""/>
                )
              })}
            </div>
            <div className="right">
              <div className="workShow-info">
                <h1 className="name">{data.name}</h1>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default workTemplate