import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.scss';

const Layout = (props: { children: JSX.Element }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.layout}>{props.children}</div>
  </div>
);

export default Layout;
