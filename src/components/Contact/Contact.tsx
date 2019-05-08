import React, { memo } from 'react';
import styles from './Contact.module.scss';
import { ReactComponent as GitHubIcon } from '@icons/github.svg';
import { ReactComponent as LinkedInIcon } from '@icons/linkedin.svg';
import { ReactComponent as MailIcon } from '@icons/mail.svg';

const Contact = memo(() => (
  <div className={styles.container}>
    <a href="https://github.com/OliverFlecke" className={styles.icon}>
      <GitHubIcon />
    </a>
    <a href="https://linkedin.com/in/OliverFlecke/" className={styles.icon}>
      <LinkedInIcon />
    </a>
    <a href="mailto:OliverFlecke@outlook.com" className={styles.icon}>
      <MailIcon />
    </a>
  </div>
));

export default Contact;
