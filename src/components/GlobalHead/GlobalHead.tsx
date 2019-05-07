import React, { memo } from 'react';
import Head from 'next/head';

const GlobalHead = memo((props: { title: string }) => (
  <Head>
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
  </Head>
));

export default GlobalHead;
