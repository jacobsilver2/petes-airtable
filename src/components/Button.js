import React from "react"
import { Link } from "gatsby"

export default function Button({title, link}) {

  return (
    <div className="container">
          <section className="section">
          <div className="level">
            <div className="level-item">
              <Link
                to={link}
                className="button is-large is-primary is-outlined is-rounded is-inverted"
              >
                {title}
              </Link>
            </div>
          </div>
          </section>
        </div>
  )
}