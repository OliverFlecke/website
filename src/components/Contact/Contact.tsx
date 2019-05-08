import React, { memo } from 'react';
import styles from './Contact.module.scss';
import { ReactComponent as GitHubIcon } from '@icons/github.svg';
import { ReactComponent as LinkedInIcon } from '@icons/linkedin.svg';
import { ReactComponent as MailIcon } from '@icons/mail.svg';

const Contact = memo((props: { style?: React.CSSProperties }) => (
  <div className={styles.container} style={props.style}>
    <a href="https://github.com/OliverFlecke">
      <GitHubIcon className={styles.icon} />
    </a>
    <a href="https://linkedin.com/in/OliverFlecke/">
      <LinkedInIcon className={styles.icon} />
    </a>
    <a href="mailto:OliverFlecke@outlook.com">
      <MailIcon className={styles.icon} />
    </a>
  </div>
));

export default Contact;
