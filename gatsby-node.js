const path = require('path');
const motionData = require('./src/works/motion/motion.json');
const webData = require('./src/works/web/web.json');

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const template = path.resolve(`src/pages/workTemplate.js`);

  motionData.motionWorks.forEach((page, index) => {
    const path = "works/motion/" + (index + 1);
    
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