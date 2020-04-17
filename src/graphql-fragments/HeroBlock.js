import { graphql } from 'gatsby';

export const HeroBlock = graphql`
  fragment HeroBlock on ContentfulHeroBlock {
    id
    title
    image {
      __typename
      ... on Node {
        ...ContentfulFluid
      }
    }
  }
`;
