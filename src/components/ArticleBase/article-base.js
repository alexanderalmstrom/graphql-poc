import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block';

import styles from './article-base.module.scss';

const ArticleBase = ({
  title, content, blocks, ...props
}) => (
  <article className={classNames(props.className, styles.article)}>
    <div className={styles.container}>
      {title && (
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>
      )}
      {content && (
        <div
          className={classNames(styles.content)}
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      )}
    </div>
    {blocks && blocks.map((block) => (
      <Block key={block.id} block={block} />
    ))}
  </article>
);

ArticleBase.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  blocks: PropTypes.array,
};

export default ArticleBase;
