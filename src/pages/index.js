import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>I'm making this by folowing the Gatsby Tutorial.</p>
  </Layout>
)

export const Head = () => <title>Home Page</title>

export default IndexPage