import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from 'gatsby-image';

import styles from './image.module.scss';

const Image = ({ image, ...props }) => {
  if (!image || !image.fluid) return null;

  return (
    <div className={classNames(props.className, styles.image)}>
      <Img
        fluid={{ ...image.fluid }}
        alt={image.title}
        style={{ height: props.height, maxHeight: props.maxHeight }}
        imgStyle={{ objectFit: props.objectFit }}
        fadeIn={false}
      />
    </div>
  );
};

Image.defaultProps = {
  objectFit: 'contain',
};

Image.propTypes = {
  image: PropTypes.object,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  objectFit: PropTypes.string,
};

export default Image;
