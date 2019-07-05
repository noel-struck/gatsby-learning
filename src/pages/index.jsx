import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Homepage</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eius dolorem labore, at ea similique consequuntur, et dolorum quaerat optio doloribus tempora! Quia quaerat quam consectetur iste ab quasi exercitationem.
    </p>
    <Link to="/contact">Contact Me</Link>
  </Layout>
);

export default IndexPage
