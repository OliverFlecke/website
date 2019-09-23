import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Publications from '../components/Publications/Publications';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <p>
      Hi, I am Oliver, a recent graduate from the Technical University of
      Denmark with my M.Sc. degree in Computer Science and Engineering. My
      interest focus around logic, algorithms and artificial intelligence.
    </p>
    <Publications />
  </Layout>
);

export default IndexPage;
