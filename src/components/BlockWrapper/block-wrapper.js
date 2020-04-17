import React from 'react';
import PropTypes from 'prop-types';

const BlockWrapper = ({ children, ...props }) => {
  const componentStyles = {
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  return (
    <section className={props.className} style={componentStyles}>
      {children}
    </section>
  );
};

BlockWrapper.propTypes = {
  className: PropTypes.string,
};

export default BlockWrapper;
