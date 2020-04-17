import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './text.module.scss';

const Text = ({ content, ...props }) => {
  if (!content) return null;

  return (
    <div
      className={classNames(props.className, styles.text)}
      dangerouslySetInnerHTML={{
        __html: content.childMarkdownRemark.html,
      }}
    />
  );
};

Text.propTypes = {
  content: PropTypes.object,
};

export default Text;
