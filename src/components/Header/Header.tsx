import React from 'react';
import Link from 'next/link';
import styles from './Header.scss';

const Header = () => (
  <nav className={styles.container}>
    <Link
      href={`/${process.env.ASSET_PREFIX}/`}
      as={`${process.env.ASSET_PREFIX}/`}
    >
      <a className={styles.link}>Home</a>
    </Link>
    <Link
      href={`/${process.env.ASSET_PREFIX}/about`}
      as={`${process.env.ASSET_PREFIX}/about`}
    >
      <a className={styles.link}>About</a>
    </Link>
  </nav>
);

export default Header;
