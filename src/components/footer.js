import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`

`;

const StyledTable = styled.table`
  width: 100%;
  border: none;
`;

const footer = (props) => (
  <StyledFooter>
    <StyledTable>
      <tr>
        <th>Location</th>
        <th>Hours</th>
      </tr>
      <tr>
        <td>Williamsburg</td>
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
        <td>718 207 7902</td>
        <td>Fri-Sat 4p-4a</td>
      </tr>
    </StyledTable>
  </StyledFooter>
)

export default footer;