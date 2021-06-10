
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/Product/)) {
      page.matchPath = "/Product/*"
      createPage(page)
    }
  }



// exports.createPages = async function ({ actions}) {

//     actions.createPage({
//         path: "fruits",
//         component: require.resolve(`./src/templates/fruits.js`),
//         context: { 
//             name: "Mango",
//             description : "this is fruit description"
//          },
//     });
//     console.log("End of Gatsby Node File");
// }

  

