import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Post">
            <p>My cool post will go in here.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="My Blog Post" />

export default BlogPage