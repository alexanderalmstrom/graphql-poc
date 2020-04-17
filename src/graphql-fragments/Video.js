import { graphql } from 'gatsby';

export const Video = graphql`
  fragment Video on ContentfulVideo {
    id
    size
    video {
      __typename
      ... on Node {
        ...ContentfulFile
      }
    }
  }
`;
