import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
