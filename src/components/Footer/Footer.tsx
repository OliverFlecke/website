import React from 'react';
import Contact from '../Contact/Contact';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <Contact style={{ marginTop: 12 }} />
  </div>
);

export default Footer;
