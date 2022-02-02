import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Alex Swan',
      }}
    >
      <h1>About Alex</h1>
      <p>
        I&apos;m a dev currently living in Chicago with my wife, daughter, dog
        and three cats.
      </p>
      <p>
        I&apos;m a dev currently living in Chicago with my wife, daughter, dog
        and three cats.
      </p>
      <ul>
        <li>
          <a
            href="https://twitter.com/BoldBigflank"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexboldit/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default About;
