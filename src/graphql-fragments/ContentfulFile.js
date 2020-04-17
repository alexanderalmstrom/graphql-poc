import { graphql } from 'gatsby';

export const ContentfulFile = graphql`
  fragment ContentfulFile on ContentfulAsset {
    title
    file {
      contentType
      url
    }
  }
`;
