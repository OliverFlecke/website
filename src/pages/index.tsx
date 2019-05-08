import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <p>Welcome to my site.</p>
    <Link to="/about/">About</Link>
  </Layout>
);

export default IndexPage;
