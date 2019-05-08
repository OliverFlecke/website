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
        My name is Oliver Fleckenstein, and currently studing at Technical
        University of Denmark (DTU) for my Masters in Computer Science and
        Engineering, where my focus have been on formal logic, algorithms and
        artificial intelligence. During my studies, I have been working at
        Microsoft Denmark as a student worker, primarily building front-end
        applications with React and TypeScript.
      </p>
      <div className={styles.profile}>
        <img src={profileImage} alt="profile" />
      </div>
    </section>
    <section>
      <p>
        I love learning new stuff, such as new languages and frameworks. Here
        are some of the tools and technologies I have experience with:
      </p>
      <DeveloperTools />
    </section>
  </Layout>
);

export default About;
