import React from "react"
import styled from "styled-components"

const StyledTable = styled.table`
  margin-left: auto;
  margin-right: auto;
`

const footer = props => (
  <footer className="footer">
    <div className="container">
      <StyledTable className="table is-narrow">
        <tbody>
          <tr>
            <th>LOCATION</th>
            <th>HOURS</th>
          </tr>
          <tr>
            <td>
              <i>Williamsburg</i>
            </td>
            <td>Sun 3p-2a</td>
          </tr>
          <tr>
            <td>709 Lorimer St</td>
            <td>Mon-Wed 5p-2a</td>
          </tr>
          <tr>
            <td>Brooklyn, NY 11211</td>
            <td>Thu 5p-2a</td>
          </tr>
          <tr>
            <td>718 302-3770</td>
            <td>Fri-Sat 4p-4a</td>
          </tr>
        </tbody>
      </StyledTable>
      <p style={{ textAlign: "center" }}>
        Take the L Train to Lorimer St - or the G Train to Metropolitan Ave
      </p>
    </div>
  </footer>
)

export default footer
