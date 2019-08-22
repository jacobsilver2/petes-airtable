import React, {Component} from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CalendarFrame from '../components/Calendar/CalendarFrame';
// triggering a github redeploy
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
    fetch(`https://api.airtable.com/v0/app4Eb0X39KtGToOS/Events?api_key=${process.env.GATSBY_AIRTABLE_API}&view=Future`)
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ events: data.records });
    }).catch(err => {
      console.log(err)
    });
   }
  
  render() {
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



  


