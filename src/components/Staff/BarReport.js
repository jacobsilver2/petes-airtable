import React from 'react';
import ReportForm from './ReportForm';
import { StaticQuery, graphql } from "gatsby"

//? As of now, the plan is to make a static query and receive the current days blank report.  
//? This requires making a new row in Airtable every morning via integromat
//? In the morning build, the days blank report will be received.
//? This component will pass down the props 'date, id' and any other fields which might already have data

const BarReport = () => {
  return <p>Future home of the bar report.</p>
}

export default BarReport;