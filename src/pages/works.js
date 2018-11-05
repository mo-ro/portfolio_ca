import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Layout from '../components/layout'
import Heading from '../components/heading'
import WorksItem from '../components/worksItem'
import UnderLineHeading from '../components/underLineHeading'

import '../style/pages/works/index.scss'

class Works extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: this.props.location.state ? this.props.location.state.index : 0
    }
  }

  render() {
    return (
      <Layout>
        <div className="works-wrapper">
          <Heading text="My works"/>
          <Tabs className="works-tab" selectedTabClassName="-selected" defaultIndex={this.state.tabIndex}>
            <TabList className="list">
              <Tab className="tab">Web</Tab>
              <Tab className="tab">Motion Graphic</Tab>
              <Tab className="tab">Illustration</Tab>
            </TabList>
        
            <TabPanel className="panel">
              <UnderLineHeading heading="Web"/>
              <ul className="works-list">
                {this.props.data.webJson.works.map((work, index) => {
                  return (
                    <WorksItem work={work} type={this.props.data.webJson.type} index={index+1} key={index} />
                  )
                })}
                <div className="item -visible"></div>
              </ul>
            </TabPanel>
            <TabPanel className="panel">
              <UnderLineHeading heading="Motion Graphic"/>
              <ul className="works-list">
                {this.props.data.motionJson.works.map((work, index) => {
                  return (
                    <WorksItem work={work} type={this.props.data.motionJson.type} index={index+1} key={index}/>
                  )
                })}
                <div className="item -visible"></div>
              </ul>
            </TabPanel>
            <TabPanel className="panel">
              <UnderLineHeading heading="Illustration"/>
              <ul className="works-list">
                {this.props.data.illustJson.works.map((work, index) => {
                  return (
                    <WorksItem work={work} type={this.props.data.illustJson.type} index={index+1} key={index}/>
                  )
                })}
                <div className="item -visible"></div>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </Layout>
    )
  }
}

export default Works

export const pageQuery = graphql`
  query {
    webJson {
      type
      works {
        name
        created
        description
        images
      }
    }
    motionJson {
      type
      works {
        name
        created
        description
        images
      }
    }
    illustJson {
      type
      works {
        name
        created
        description
        images
      }
    }
  }
`