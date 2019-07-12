import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "private party" } }) {
      nodes {
        data {
          Name
          Content
          type
          id
        }
      }
    }
  }
`

const PrivateParty = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div>{myhtml}</div>

        <div className="container">
        <form name="private party form" action="/" method="POST" data-netlify="true">
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
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Phone</label>
              <div className="field is-expanded">
                <div className="field has-addons">
                  <p className="control">
                    <a className="button is-static">+1</a>
                  </p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </p>
                </div>
              </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">How many people?*</label>
            <div className="field is-expanded">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  name="how-many-people"
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Desired date</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    name="desired-date"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">What time?</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    name="what time"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">How many hours?*</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    name="how-many-hours"
                    required
                  />
                </p>
              </div>
          </div>

          <div className="control">
            <label className="label is-small has-text-white">
              Inside or outside?*
            </label>
            <div className="select">
              <select name="how-many-hours" required>
                <option>Inside</option>
                <option>Outside</option>
              </select>
            </div>
          </div>

          <div className="control">
            <label className="label is-small has-text-white">
              Open bar or cash bar?*
            </label>
            <div className="select">
              <select name="open-bar-or-cash-bar" required>
                <option>Open bar</option>
                <option>Cash bar</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">What's the occasion?</label>
            <div className="field">
              <p className="control is-expanded">
                <textarea className="textarea" name="whats-the-occasion" />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Anything else we should know? Special requests, etc.</label>
            <div className="field">
              <p className="control is-expanded">
                <textarea className="textarea" name="anything-else-we-should-know" />
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
          <input type="hidden" name="form-name" value="private party form" />
          </form>
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Private Party",
  url: "/private-party",
}

export default PrivateParty
