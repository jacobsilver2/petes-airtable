import React, { useState } from "react"
import Layout from '../layout';
import { StaticQuery, graphql } from "gatsby"
import SoundCard from './SoundCard';
import formatCalendarTime from "../../utility/formatCalendarTime"
// import formatCalendarDate from '../../utility/formatCalendarDate';

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

const SoundForm = () => {

  return (
    <>
        <StaticQuery 
          query={soundQuery}
          render={data => {
            const cards = data.allAirtable.edges.map(edge => (
              <SoundCard 
                key={edge.node.data.id}
                name={edge.node.data.Name}
                time={formatCalendarTime(edge.node.data.Date)}
                id={edge.node.data.id}
                initialReport={edge.node.data.Report}
                initialDraw={edge.node.data.Draw}
              />
            ))
            return (
              <>  
                {cards}
              </>
            )
          }}
        />
    </>
  )
}

export default SoundForm;