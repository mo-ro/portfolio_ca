const path = require('path')
const motionData = require('./src/works/motion/motion.json')
const webData = require('./src/works/web/web.json')
const illustData = require('./src/works/graphic/graphic.json')

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const template = path.resolve(`src/pages/workTemplate.js`)

  motionData.works.forEach((page, index) => {
    const path = "works/motion/" + (index + 1)
    
    createPage({
      path,
      component: template,
      context: {
        page,
        type: motionData.type,
        otherWorks: motionData.works
      }
    })
  })

  webData.works.forEach((page, index) => {
    const path = "works/web/" + (index + 1)
    
    createPage({
      path,
      component: template,
      context: {
        page,
        type: webData.type,
        otherWorks: webData.works
      }
    })
  })

  illustData.works.forEach((page, index) => {
    const path = "works/graphic/" + (index + 1)
    
    createPage({
      path,
      component: template,
      context: {
        page,
        type: illustData.type,
        otherWorks: illustData.works
      }
    })
  })
}