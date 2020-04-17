import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../Layout';
import SEO from '../SEO';
import ArticleBase from '../ArticleBase';

import styles from './post.module.scss';

const Post = ({ data }) => {
  const { contentfulPost: post } = data;

  return (
    <Layout>
      <SEO title={post.title} />
      <ArticleBase className={styles.post} {...post} />
    </Layout>
  );
};

export const PostBySlug = graphql`
  query PostBySlug($slug: String, $locale: String) {
    contentfulPost(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      node_locale
      title
      slug
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

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
