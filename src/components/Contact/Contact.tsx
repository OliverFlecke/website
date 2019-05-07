import React, { memo } from 'react';
import ReactSVG from 'react-svg';
import styles from './Contact.module.scss';

const Contact = memo(() => (
  <div className={styles.container}>
    <a href="https://github.com/OliverFlecke">
      <ReactSVG
        src={`../../icons/github.svg`}
        svgClassName={styles.icon}
        fallback={() => <span>GitHub</span>}
      />
    </a>
    <a href="https://linkedin.com/in/OliverFlecke/">
      <ReactSVG
        src={`../../icons/linkedin.svg`}
        svgClassName={styles.icon}
        fallback={() => <span>LinkedIn</span>}
      />
    </a>
    <a href="mailto:OliverFlecke@outlook.com">
      <ReactSVG
        src={`../../icons/mail.svg`}
        svgClassName={styles.icon}
        fallback={() => <span>Email</span>}
      />
    </a>
  </div>
));

export default Contact;
