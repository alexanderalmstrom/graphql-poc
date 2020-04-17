import { graphql } from 'gatsby';

export const ContentBlock = graphql`
  fragment ContentBlock on ContentfulContentBlock {
    id
    columns {
      __typename
      ... on Node {
        ...Text
        ...Image
        ...Video
      }
    }
    backgroundColor
    textColor
  }
`;
