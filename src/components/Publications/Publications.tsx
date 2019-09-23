import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './Publications.module.scss';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allPublication(sort: { fields: [date] }) {
          totalCount
          edges {
            node {
              id
              title
              author
              abstract
              date
              pageCount
              downloadPath
            }
          }
        }
      }
    `,
  );

  return (
    <>
      <h2>Publications</h2>
      {data.allPublication.edges.map(
        (publication: { node: PublicationProps }) => (
          <Publication key={publication.node.id} meta={publication.node} />
        ),
      )}
    </>
  );
};

interface PublicationProps {
  title: string;
  author: string;
  abstract: string;
  date: string;
  pageCount: number;
  downloadPath: string;
  id: string;
}

const Publication = (props: { meta: PublicationProps }) => {
  const { meta } = props;

  return (
    <div className={styles.publicationContainer}>
      <div className={styles.publicationHeader}>
        <h3>{meta.title}</h3>
        <GetAppSharpIcon
          className={styles.downloadIcon}
          onClick={() => (window.location.href = meta.downloadPath)}
        />
      </div>
      <div className={styles.dateAndAuthorContainer}>
        <div className={styles.date}>
          {meta.date
            ? new Date(meta.date).toLocaleDateString(undefined, {
                month: 'short',
                year: 'numeric',
                day: 'numeric',
              })
            : ''}
        </div>
        <div className={styles.author}>{meta.author}</div>
      </div>

      <div>{meta.abstract}</div>
    </div>
  );
};
