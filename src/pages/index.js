import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>I'm making this by folowing the Gatsby Tutorial.</p>
    <StaticImage 
    alt="smilie"
    src="../images/smilie.png"
    />
  </Layout>
)

export const Head = () => <title>Home Page</title>

export default IndexPage