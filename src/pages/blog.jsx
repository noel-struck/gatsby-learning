import React from 'react';
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql `
    query{
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              title,
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {
          data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index}>
                <h2>{ edge.node.frontmatter.title }</h2>
                <p>{ edge.node.frontmatter.date }</p>
              </li>
            );
          })
        }
      </ol>
    </Layout>
  )
}

export default BlogPage;