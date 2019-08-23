import React, {Component} from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CalendarFrame from '../components/Calendar/CalendarFrame';
import getEvents from '../services/getCalendarEvents';


export const pageQuery = graphql`
  {
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



class calendar extends Component {
  state = { events: [] }

  componentDidMount() {
    new Promise((resolve, reject) => {
      getEvents(`https://api.airtable.com/v0/app4Eb0X39KtGToOS/Events?api_key=${process.env.GATSBY_AIRTABLE_API}&view=Future`, [], resolve, reject)
    })
      .then(response => {
        this.setState({events: response})
      })
  }

  
  render() {
    console.log(this.state.events);
    const renderedCalendar = <CalendarFrame events={this.state.events} data={this.props.data}/>
    return (
      <Layout fluid={null} fullheight={false}>
      <div className="container"> 
      <h1 className="has-text-danger" style={{ textAlign: "center" }}>SHOWTIMES</h1>
      <p style={{ textAlign: "center" }}>ALL SHOWS ARE FREE(unless otherwise listed)</p>
      <p style={{ textAlign: "center" }}>($5 suggested donation)</p>
        {renderedCalendar}
      </div>
    </Layout>
    );
  }
}

export const frontmatter = {
  title: "Calendar",
  url: "/calendar",
  navOrder: 2
}

export default calendar;

      // const event = {
      //   title: data.fields.Name,
      //   date: data.fields.Date,
      //   image: data.fields['Act Image'][0].url,
      //   blurb: data.fields['Act Blurb'][0],
      //   website: data.fields['Act Website'][0],
      //   id: data.id
      // }


// base('Events').select({view: 'Future'})
// .eachPage(
//   (events, fetchNextPage) => {
//     events.forEach(event => {
//       const theEvent = {
//         date: event.fields.Date,
//         image: event.fields['Act Image'] ? event.fields['Act Image'][0].url : null,
//         title: event.fields.Name,
//         blurb: event.fields['Act Blurb'] ? event.fields['Act Blurb'][0] : null,
//         website: event.fields['Act Website'] ? event.fields['Act Website'][0] : null,
//         id: event.id
//       }
//       this.state.events.push(theEvent)
//     })
//     fetchNextPage()
//   })
  


