import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "public party" } }) {
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

const PublicParty = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div className="container">
        <form name="public party form" action="/" method="POST" data-netlify="true">
          <div className="field">
            <label className="label is-small has-text-white">Name</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="First and Last Name"
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
                  name="email"
                  type="email"
                  placeholder="Email"
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
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              How many people?*
            </label>
            <div className="field is-expanded">
              <p className="control is-expanded">
                <input className="input" name="how-many-people" type="text" required />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              Desired date
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" name="desired-date" type="text" />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">What time?</label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" name="what-time" type="text" />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              How many hours?*
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" name="how-many-hours" type="text" required />
              </p>
            </div>
          </div>

          <div className="control">
            <label className="label is-small has-text-white">
              Inside or outside?*
            </label>
            <div className="select">
              <select name="inside-or-outside" required>
                <option>Inside</option>
                <option>Outside</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              What's the occasion?
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea className="textarea" name="whats-the-occasion"/>
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              Anything else we should know?
            </label>
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
          <input type="hidden" name="form-name" value="public party form" />
          </form>
        </div>
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Public Party",
  url: "/public-party",
}

export default PublicParty
