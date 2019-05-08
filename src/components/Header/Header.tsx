import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.module.scss';

const Header = (props: { siteTitle: string }) => (
  <header className={styles.container}>
    <div className={styles.header}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.home}>
          {props.siteTitle}
        </Link>
      </h1>
      <div className={styles.menu}>
        <h2 style={{ margin: 0 }}>
          <Link to="/about" className={styles.menuItem}>
            About
          </Link>
        </h2>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
