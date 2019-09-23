import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import profileImage from '../images/profile.jpg';
import styles from './styles/about.module.scss';
import DeveloperTools from '../components/DeveloperTools/DeveloperTools';

const About = (): JSX.Element => (
  <Layout>
    <SEO title="About" />
    <section className={styles.about}>
      <p>
        My name is Oliver Fleckenstein, and I recently graduated from the
        Technical University of Denmark (DTU), getting my M.Sc. in Computer
        Science and Engineering, where my focus have been on formal logic,
        algorithms and artificial intelligence. During my studies, I have been
        working at Microsoft Denmark as a student worker, primarily building
        front-end applications with React and TypeScript.
      </p>
      <div className={styles.profile}>
        <img src={profileImage} alt="profile" />
      </div>
    </section>
    <section>
      <p>
        I enjoy learning new technologies, languages and stuff in general. Here
        are some of the tools I have experience with:
      </p>
      <DeveloperTools />
    </section>
  </Layout>
);

export default About;
