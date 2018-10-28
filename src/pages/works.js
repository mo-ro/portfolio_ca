import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from '../components/layout'
import Heading from '../components/heading'
import WorksItem from '../components/worksItem'
import UnderLineHeading from '../components/underLineHeading'

import '../style/pages/works/index.scss'

class Works extends React.Component {
  render() {
    return (
      <Layout>
        <div className="works-wrapper">
          <Heading text="My works"/>
          <Tabs className="works-tab" selectedTabClassName="-selected">
            <TabList className="list">
              <Tab className="tab">Web</Tab>
              <Tab className="tab">Motion Graphic</Tab>
              <Tab className="tab">Illust</Tab>
            </TabList>
        
            <TabPanel className="panel">
              <UnderLineHeading heading="Web"/>
              <ul className="works-list">
                {this.props.data.webJson.works.map((work, index) => {
                  return (
                    <WorksItem work={work} index={index} key={index} />
                  )
                })}
              </ul>
            </TabPanel>
            <TabPanel className="panel">
              <ul className="works-list">
                {this.props.data.motionJson.works.map((work, index) => {
                  return (
                    <WorksItem work={work} index={index} key={index}/>
                  )
                })}
              </ul>
            </TabPanel>
            <TabPanel className="panel">
              <ul className="works-list">
                {this.props.data.illustJson.works.map((work, index) => {
                  return (
                    <WorksItem work={work} index={index} key={index}/>
                  )
                })}
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
      works {
        name
        created
        description
        images
      }
    }
    motionJson {
      works {
        name
        created
        description
        images
      }
    }
    illustJson {
      works {
        name
        created
        description
        images
      }
    }
  }
`