import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import  { Link } from 'gatsby'

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

  renderWeb() {
    
  }

  render() {
    const data = this.props.pageContext.page
    const type = this.props.pageContext.type

    return (
      <Layout>
        <div className="workshow-wrapper">
          <Heading text="Motion Work"/>
          {data && <main className="workshow-content">
            <div className="left">
              {data.images.map((image, key) => {
                const path = require(`../images/${image}`)
                return (
                  <img className="image" data-hovertype="text" src={path} key={key} alt=""/>
                )
              })}
            </div>
            <div className="right">
              <div className="workshow-info">
                <h1 className="name" data-hovertype="text">{data.name}</h1>
                <section className="section">
                  <Heading text="Description" type="sub"/>
                  <p className="text" data-hovertype="text">{data.description}</p>
                </section>
                <section className="section">
                  <Heading text="Tools" type="sub"/>
                  <p className="text" data-hovertype="text">{this.getTools(data.tools)}</p>
                </section>
                {type === 'web' ? 
                  <section className="section">
                    <Heading text="Demonstration" type="sub"/>
                    <Link className="text -link" to={data.url} data-hovertype="text">{data.url}</Link>
                  </section>
                 : null}
                <Heading text="Date" type="sub"/>
                <p className="date" data-hovertype="text">{data.created}</p>
              </div>
            </div>
          </main>}
        </div>
      </Layout>
    )
  }
}

export default workTemplate