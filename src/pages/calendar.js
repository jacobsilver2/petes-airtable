import React, { useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CalendarFrame from '../components/Calendar/CalendarFrame';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Events" } }
      sort: {fields: data___Date}
      ) {
      nodes {
        data {
          Date
          Name
          id
          Act_Blurb
          Act_Website
          Act_Image {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                  originalImg
                }
              }
            }
          }
        }
      }
    }
    allFile(filter: {name: {regex: "/rand/"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 150, maxHeight: 150) {
          ...GatsbyImageSharpFluid
          originalImg
        }
      }
    }
  }
  }
`

const CalendarPage = ({ data }) => {
  // const [hasError, setErrors] = useState(false);
  // const [shows, setShows] = useState();

  // useEffect(() => {
  //   fetch('https://api.airtable.com/v0/app4Eb0X39KtGToOS/Events?view=Future', 
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': 'Bearer keyY11TcpoTR646Fh' 
  //       }
  //     }
  //   )
  //     .then(results => results.json())
  //     .then(data => { setShows(data) })
  // }, [])

  const renderedCalendar = <CalendarFrame data={data}/>
  return (
    <Layout fluid={null} fullheight={false}>
      <div className="container"> 
      <h1 className="has-text-danger" style={{ textAlign: "center" }}>SHOWTIMES</h1>
      <p style={{ textAlign: "center" }}>ALL SHOWS ARE FREE(unless otherwise listed)</p>
      <p style={{ textAlign: "center" }}>($5 suggested donation)</p>
        {renderedCalendar}
      </div>
    </Layout>
  )
}

export const frontmatter = {
  title: "Calendar",
  url: "/calendar",
  navOrder: 2
}

export default CalendarPage;
  


