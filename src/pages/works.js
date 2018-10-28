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
                {this.props.data.webJson.webWorks.map((work, key) => {
                  return (
                    <WorksItem work={work} key={key} />
                  )
                })}
              </ul>
            </TabPanel>
            <TabPanel className="panel">
              <ul className="works-list">
                {this.props.data.motionJson.motionWorks.map((work, key) => {
                  return (
                    <WorksItem work={work} key={key} />
                  )
                })}
              </ul>
            </TabPanel>
            <TabPanel className="panel">
              <ul className="works-list">
                {this.props.data.illustJson.illustWorks.map((work, key) => {
                  return (
                    <WorksItem work={work} key={key} />
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
      webWorks {
        name
        created
        description
        images
      }
    }
    motionJson {
      motionWorks {
        name
        created
        description
        images
      }
    }
    illustJson {
      illustWorks {
        name
        created
        description
        images
      }
    }
  }
`