import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
  </Layout>
);

export default IndexPage;
