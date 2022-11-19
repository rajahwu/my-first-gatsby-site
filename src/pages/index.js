import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by folowing the Gatsby Tutorial.</p>
      <StaticImage
        alt="smilie"
        src="../images/smile.png"
      />
    </Layout>
  )
}
export const Head = () => <Seo title="Home Page" />

export default IndexPage