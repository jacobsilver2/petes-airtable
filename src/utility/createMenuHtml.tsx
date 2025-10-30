import React from "react"
import styled from "styled-components"

const StyledTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`

interface MenuData {
  id?: string
  type?: string
  Name?: string
  Description?: string
  Price?: string | number
}

export default function createMenuHtml(data: MenuData): React.JSX.Element {
  switch (data.type) {
    case "heading1":
      return (
        <div
          className="container"
          key={data.id || 'default-key'}
          style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
        >
          <div className="content">
            <h1 className="has-text-danger" style={{ textAlign: "center" }}>
              {data.Name}
            </h1>
          </div>
        </div>
      )
    case "text":
      return (
        <div className="container" key={data.id || 'default-key'}>
          <StyledTable className="table is-narrow">
            <tbody>
              <tr>
                <th className="has-text-danger">{data.Name}</th>
                <th className="has-text-danger">
                  {data.Price ? `$` + data.Price : null}
                </th>
              </tr>
              <tr>
                <td style={{ width: "100%" }}>{data.Description}</td>
              </tr>
            </tbody>
          </StyledTable>
        </div>
      )
    default:
      return <div></div>
  }
}
