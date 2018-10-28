const path = require('path');
const motionData = require('./src/works/motion/motion.json');
const webData = require('./src/works/web/web.json');
const illustData = require('./src/works/illust/illust.json');

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const template = path.resolve(`src/pages/workTemplate.js`);

  motionData.works.forEach((page, index) => {
    const path = "works/motion/" + (index + 1);
    
    createPage({
      path,
      component: template,
      context: {
        page
      }
    });
  });

  webData.works.forEach((page, index) => {
    const path = "works/web/" + (index + 1);
    
    createPage({
      path,
      component: template,
      context: {
        page
      }
    });
  });

  illustData.works.forEach((page, index) => {
    const path = "works/illust/" + (index + 1);
    
    createPage({
      path,
      component: template,
      context: {
        page
      }
    });
  });

  // webData.motionWorks.forEach((page) => {
  //   const path = page.name;

  //   createPage({
  //     path,
  //     component: template,

  //     context: {
  //       page
  //     }
  //   });
  // });
};