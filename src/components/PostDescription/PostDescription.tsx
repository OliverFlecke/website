import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import styles from './PostDescription.scss';

interface PostDescriptionProps {
  id: string;
  title: string;
  date: Date;
  description: string;
}

const PostDescription = (props: PostDescriptionProps) => (
  <div className={styles.container}>
    <Link
      href={{ pathname: '/post', query: { id: props.id } }}
      as={`${process.env.ASSET_PREFIX}/post/${props.id}`}
      key={props.id}
    >
      <a className={styles.title}>{props.title}</a>
    </Link>
    <br />
    <span className={styles.date}>
      {moment(props.date).format('YYYY-MM-DD')}
    </span>
    <p className={styles.description}>{props.description}</p>
  </div>
);

export default PostDescription;
