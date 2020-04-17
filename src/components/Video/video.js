import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './video.module.scss';

const Video = ({ video, ...props }) => {
  if (!video || !video.file) return null;

  return (
    <div className={classNames(props.className, styles.video)}>
      <video src={video.file.url} autoPlay muted playsInline loop />
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.object,
};

export default Video;
