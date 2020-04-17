import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BlockWrapper from '../BlockWrapper';
import Image from '../Image';

import styles from './hero-block.module.scss';

const HeroBlock = ({ __typename, title, image }) => (
  <BlockWrapper className={classNames(__typename, styles.section)}>
    <div className={styles.container}>
      {title && (
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      )}
      {image && <Image className={styles.image} image={image} />}
    </div>
  </BlockWrapper>
);

HeroBlock.propTypes = {
  __typename: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
};

export default HeroBlock;
