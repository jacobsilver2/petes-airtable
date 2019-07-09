import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PostTemplate = (props) => {
  console.log(props)
  const myhtml = props.data.allAirtable.edges.map(edge => {
    switch (edge.node.data.type) {
      case 'button':
        return <section key={edge.node.data.id}><a href={edge.node.data.website}><button>{edge.node.data.Content}</button></a></section>
      case 'image':
        return <section key={edge.node.data.id}><img src={edge.node.data.Attachments[0].url} alt=""/></section>
      case 'text':
        return <section key={edge.node.data.id} dangerouslySetInnerHTML={{ __html: edge.node.data.Content}} />
      default:
        return <section key={edge.node.data.id}><p>I guess I'm the default...</p></section>
    }
  }

  )
  return (
    <>
      <Helmet title={props.pageContext.name} />
      <Layout>
        {myhtml}
      </Layout>
    </>
  );
};



export default PostTemplate;

export const pageQuery = graphql`
  query($name: String!) {
    allAirtable(filter: {table: {eq: $name}}, sort: {fields: data___order, order: ASC}) {
    edges {
      node {
        data {
          Name
          Content
          id
          type
          website
          order
          Attachments {
            url
          }
        }
      }
    }
  }
  }
`;
