import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "booking" } }
      sort: { order: ASC, fields: data___order }
    ) {
      nodes {
        data {
          Name
          Content
          type
          website
          id
          Attachments {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "booking.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BookingPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
        <div>{myhtml}</div>
        <div className="container">
          <form name="booking form" action="/" method="POST" data-netlify="true">
          <div className="field">
            <label className="label is-small has-text-white">Name</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="First and Last Name"
                  name="name"
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Email</label>
            <div className="field is-expanded">
              <p className="control is-expanded">
                <input className="input" name="email" type="email" placeholder="Email" required />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              Name of Act
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="text" name="name-of-act" />
              </p>
            </div>
          </div>

          <div className="control">
          <label className="label is-small has-text-white">
              Number of Band Members*
          </label>
            <div className="select">
              <select name="number-of-band-members" required>
                <option>Solo</option>
                <option>Duo</option>
                <option>Trio</option>
                <option>Quartet</option>
                <option>5pc +</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Website</label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" name="website" type="url" placeholder="http://" />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Link 1</label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" name="link1" type="url" placeholder="http://" />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Link 2</label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" name="link2" type="url" placeholder="http://" />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Message</label>
            <div className="field">
              <p className="control is-expanded">
                <textarea className="textarea" name="message" />
              </p>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-link has-background-danger">
                Submit
              </button>
            </div>
          </div>
          <input type="hidden" name="form-name" value="booking form" />
          </form>
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Booking",
  url: "/booking",
}
export default BookingPage
