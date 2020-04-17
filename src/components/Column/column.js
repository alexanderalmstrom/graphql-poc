import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Text from '../Text';
import Image from '../Image';
import Video from '../Video';

import styles from './column.module.scss';

const columnTypes = {
  ContentfulText: Text,
  ContentfulImage: Image,
  ContentfulVideo: Video,
};

const Column = ({
  __typename, id, size, ...props
}) => {
  const componentClasses = classNames(__typename, styles.column, {
    [`col-${size}`]: !!size,
  });

  const ColumnComponent = columnTypes[__typename];

  return <ColumnComponent className={componentClasses} key={id} {...props} />;
};

Column.propTypes = {
  __typename: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.number,
};

export default Column;
