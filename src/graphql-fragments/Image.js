import { graphql } from 'gatsby';

export const Image = graphql`
  fragment Image on ContentfulImage {
    id
    size
    image {
      __typename
      ... on Node {
        ...ContentfulFluid
      }
    }
  }
`;
