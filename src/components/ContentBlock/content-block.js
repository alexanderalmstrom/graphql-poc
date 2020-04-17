import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BlockWrapper from '../BlockWrapper';
import Column from '../Column';

import styles from './content-block.module.scss';

const ContentBlock = ({ __typename, columns, ...props }) => {
  if (!columns) return null;

  return (
    <BlockWrapper className={classNames(__typename, styles.section)} {...props}>
      <div className={styles.container}>
        {columns.map((column) => <Column key={column.id} {...column} />)}
      </div>
    </BlockWrapper>
  );
};

ContentBlock.propTypes = {
  __typename: PropTypes.string,
  columns: PropTypes.array,
};

export default ContentBlock;
