import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import WorksItem from '../components/worksItem'

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

  shuffleWorks(works) {
    if(works) {
      for(let i = works.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let tmp = works[i]
        works[i] = works[j]
        works[j] = tmp
      }
    }
    return works
  }

  render() {
    const data = this.props.pageContext.page
    const type = this.props.pageContext.type
    const otherWorks = this.shuffleWorks(this.props.pageContext.otherWorks)

    return (
      <Layout>
        {data && <div className="workshow-wrapper">
          <Heading text="Motion Work"/>
          <main className="workshow-content">
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
                    <a className="text -link" href={data.url} data-hovertype="text" target="_blank" rel="noopener noreferrer">{data.url}</a>
                  </section>
                 : null}
                <Heading text="Date" type="sub"/>
                <p className="date" data-hovertype="text">{data.created}</p>
              </div>
            </div>
          </main>
          <div className="datashow-other">
            <Heading text="Other works" />
            <div className="works-list">
              {otherWorks.slice(0, 4).map((work, index) => {
                return (
                  <WorksItem work={work} type={type} index={index+1} key={index} />
                )
              })}
            </div>
          </div>
        </div>}
      </Layout>
    )
  }
}

export default workTemplate