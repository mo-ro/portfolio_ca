import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'

import '../style/pages/workShow/index.scss'

class workTemplate extends React.Component {

  getTools(tools) {
    let toolsText = ""
    tools.forEach((tool, index) => {
      toolsText += tool
      if(index !== tools.length-1) {
        toolsText += " / "
      }
    })
    return toolsText
  }

  render() {
    const data = this.props.pageContext.page;
    return (
      <Layout>
        <div className="workshow-wrapper">
          <Heading text="Motion Work"/>
          <main className="workshow-content">
            <div className="left">
              {data.images.map((image, key) => {
                const path = require(`../images/${image}`)
                return (
                  <img className="image" data-text="true" src={path} key={key} alt=""/>
                )
              })}
            </div>
            <div className="right">
              <div className="workshow-info">
                <h1 className="name" data-text="true">{data.name}</h1>
                <section className="section">
                  <Heading text="Description" type="sub"/>
                  <p className="text" data-text="true">{data.description}</p>
                </section>
                <section className="section">
                  <Heading text="Tools" type="sub"/>
                  <p className="text" data-text="true">{this.getTools(data.tools)}</p>
                </section>
                <p className="date" data-text="true">{data.created}</p>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default workTemplate