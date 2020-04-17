import { graphql } from 'gatsby';

export const Text = graphql`
  fragment Text on ContentfulText {
    id
    size
    content {
      childMarkdownRemark {
        html
      }
    }
  }
`;
