import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../SEO';
import ArticleBase from '../ArticleBase';

import styles from './page.module.scss';

const Page = ({ data }) => {
  const { contentfulPage: page } = data;

  return (
    <Layout>
      <SEO title={page.title} />
      <ArticleBase className={styles.page} {...page} />
    </Layout>
  );
};

export const PageBySlug = graphql`
  query PageBySlug($slug: String, $locale: String) {
    contentfulPage(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      node_locale
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      blocks {
        __typename
        ... on Node {
          ...HeroBlock
          ...ContentBlock
        }
      }
    }
  }
`;

Page.propTypes = {
  data: PropTypes.object,
};

export default Page;
