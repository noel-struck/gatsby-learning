import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>Description of about page</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage;