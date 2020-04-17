const path = require('path');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const { language } = page.context.intl;

  deletePage(page);

  createPage({
    ...page,
    context: {
      ...page.context,
      locale: language,
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              slug
              node_locale
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              slug
              node_locale
            }
          }
        }
      }
    `,
  );

  const { edges: pages } = data.allContentfulPage;
  const { edges: posts } = data.allContentfulPost;

  pages.forEach(({ node }) => createPage({
    path: `/page/${node.slug}`,
    component: path.resolve('./src/components/Page/page.js'),
    context: {
      ...node,
    },
  }));

  posts.forEach(({ node }) => createPage({
    path: `/post/${node.slug}`,
    component: path.resolve('./src/components/Post/post.js'),
    context: {
      ...node,
    },
  }));
};
