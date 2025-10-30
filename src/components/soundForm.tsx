import React from "react"
import Layout from "./layout"
// import SoundCard from "./SoundCard"
import formatCalendarTime from "../utility/formatCalendarTime"
import formatCalendarDate from "../utility/formatCalendarDate"

// export const soundQuery = graphql`
//   {
//     allAirtable(filter: { queryName: { eq: "TodayGrid" } }) {
//       edges {
//         node {
//           data {
//             Name
//             Date
//             id
//             Report
//             Draw
//           }
//         }
//       }
//     }
//   }
// `

const SoundForm: React.FC = () => {
  return (
    <>
      <Layout>
        <div>yo</div>
        {/* <StaticQuery 
          query={soundQuery}
          render={data => {
            const cards = data.allAirtable.edges.map(edge => (
              <SoundCard 
                name={edge.node.data.Name}
                date={formatCalendarDate(edge.node.data.Date)}
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
        /> */}
      </Layout>
    </>
  )
}

export default SoundForm
