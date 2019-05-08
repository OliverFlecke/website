import React from 'react';
import { format } from 'date-fns';
import styles from './PostDescription.scss';

interface PostDescriptionProps {
  id: string;
  title: string;
  date: Date;
  description: string;
}

const PostDescription = (props: PostDescriptionProps) => (
  <div className={styles.container}>
    <a className={styles.title}>{props.title}</a>
    <br />
    <span className={styles.date}>{format(props.date, 'YYYY-MM-DD')}</span>
    <p className={styles.description}>{props.description}</p>
  </div>
);

export default PostDescription;
