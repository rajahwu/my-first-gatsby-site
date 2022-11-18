import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
   
    return (
        <Layout pageTitle="My Blog Post">
          {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
            ))
          }
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(sort: { frontmatter: { date: DESC }}) {
    nodes {
      frontmatter {
        date
        title
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Post" />

export default BlogPage