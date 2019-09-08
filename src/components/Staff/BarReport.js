import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import ReportForm from './ReportForm';
import Layout from '../layout';

//? As of now, the plan is to make a static query and receive the current days blank report.  
//? This requires making a new row in Airtable every morning via integromat
//? In the morning build, the days blank report will be received.
//? This component will pass down the props 'date, id' and any other fields which might already have data

export const reportQuery = graphql`
  {
    allAirtable(filter: {table: {eq: "Logbook"}}, limit: 1, sort: {fields: data___Date, order: DESC}) {
    edges {
      node {
        data {
          Date
          Notes
          id
        }
        id
      }
    }
  }
  }
`;

const BarReport = () => {
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <StaticQuery 
          query={reportQuery}
          render={data => {
            const form = data.allAirtable.edges.map(edge => (
              <ReportForm 
                key={edge.node.id}
                date={edge.node.data.Date}
                id={edge.node.data.id}
                initialNote={edge.node.data.Notes}
              />
            ))
            return (
              <>
                {form}
              </>
            )
          }}
        />
      </Layout>
    </>
  )
}

export default BarReport;