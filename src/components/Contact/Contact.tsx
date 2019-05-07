import React, { memo } from 'react';
import ReactSVG from 'react-svg';
import styles from './Contact.scss';
import { icon } from '../../styles/icons.scss';

const Contact = memo(() => (
  <div className={styles.container}>
    <a href="https://github.com/OliverFlecke">
      <ReactSVG
        src={`${process.env.ASSET_PREFIX}/static/icons/github.svg`}
        svgClassName={icon}
        fallback={() => <span>GitHub</span>}
      />
    </a>
    <a href="https://linkedin.com/in/OliverFlecke/">
      <ReactSVG
        src={`${process.env.ASSET_PREFIX}/static/icons/linkedin.svg`}
        svgClassName={icon}
        fallback={() => <span>LinkedIn</span>}
      />
    </a>
    <a href="mailto:OliverFlecke@outlook.com">
      <ReactSVG
        src={`${process.env.ASSET_PREFIX}/static/icons/mail.svg`}
        svgClassName={icon}
        fallback={() => <span>Email</span>}
      />
    </a>
  </div>
));

export default Contact;
