import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from '../../hooks';

import Language from '../Language';

import styles from './header.module.scss';

export default function Header() {
  const { title } = useSiteMetadata();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">{title}</Link>
        <Language />
      </div>
    </header>
  );
}
