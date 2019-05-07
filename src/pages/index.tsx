import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi!</h1>
    <Link to="/about/">About</Link>
  </Layout>
);

export default IndexPage;
