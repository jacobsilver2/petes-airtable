import React from 'react';
import Layout from './layout';
import { StaticQuery, graphql } from "gatsby"
import SoundCard from './SoundCard';
import formatCalendarTime from "../utility/formatCalendarTime"
import formatCalendarDate from '../utility/formatCalendarDate';

export const soundQuery = graphql`
  {
    allAirtable(filter: { queryName: { eq: "TodayGrid" } }) {
      edges {
        node {
          data {
            Name
            Date
            id
            Report
            Draw
          }
        }
      }
    }
  }
`

const SoundForm = props => {

  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <StaticQuery 
          query={soundQuery}
          render={data => {
            const cards = data.allAirtable.edges.map(edge => (
              <SoundCard 
                name={edge.node.data.Name}
                time={formatCalendarTime(edge.node.data.Date)}
                id={edge.node.data.id}
                Report={edge.node.data.Report}
                Draw={edge.node.data.Draw}
              />
            ))
            return (
              <>  
                {cards}
              </>
            )
          }}
        />
      </Layout>
    </>
  )
}

export default SoundForm;