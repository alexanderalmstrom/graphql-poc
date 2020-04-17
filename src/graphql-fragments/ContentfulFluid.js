import { graphql } from 'gatsby';

export const ContentfulFluid = graphql`
  fragment ContentfulFluid on ContentfulAsset {
    title
    fluid(maxWidth: 2560, quality: 75) {
      src
      srcSet
      sizes
      aspectRatio
    }
  }
`;
