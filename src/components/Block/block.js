import React from 'react';
import PropTypes from 'prop-types';

import HeroBlock from '../HeroBlock';
import ContentBlock from '../ContentBlock';

const blockTypes = {
  ContentfulHeroBlock: HeroBlock,
  ContentfulContentBlock: ContentBlock,
};

const Block = ({ block, block: { __typename } }) => {
  if (!block || !__typename) return null;

  const BlockComponent = blockTypes[__typename];

  return <BlockComponent key={block.id} {...block} />;
};

Block.propTypes = {
  block: PropTypes.object,
};

export default Block;
