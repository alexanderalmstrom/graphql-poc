/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Header from '../Header';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
