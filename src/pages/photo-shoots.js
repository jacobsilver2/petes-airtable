import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "photo shoots" } }
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
    file(relativePath: { eq: "music_room.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PhotoShootsPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid}>
        <div>{myhtml}</div>
        <div className="container">

          <div className="field">
              <label className="label is-small has-text-white">Name</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="First and Last Name"
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
                    />
                  </p>
                </div>
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
                    />
                  </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Total number of cast and crew</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Type of shoot (film/video/still) *</label>
              <div className="field">
                <p className="control is-expanded">
                  <textarea
                    className="textarea"
                  ></textarea>
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
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Desired hours (total hours and which hours you desire)</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Name of production</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Production company</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">Where would you like to shoot (bar, live room, back yard)</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                  />
                </p>
              </div>
          </div>

          <div className="field">
              <label className="label is-small has-text-white">How many vehicles associated with shoot</label>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                  />
                </p>
              </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link has-background-danger">Submit</button>
            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Photo Shoots",
  url: "/photo-shoots",
}
export default PhotoShootsPage
