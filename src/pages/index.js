import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ArticleBase from '../components/ArticleBase';

const Index = ({ data }) => {
  const { contentfulPage: page } = data;

  return (
    <Layout>
      <SEO title={page.title} />
      <ArticleBase {...page} />
    </Layout>
  );
};

export const IndexPage = graphql`
  query IndexPage($locale: String) {
    contentfulPage(isFrontPage: { eq: true }, node_locale: { eq: $locale }) {
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

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;
