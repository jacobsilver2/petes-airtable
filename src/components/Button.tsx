import React from "react"
import Link from "next/link"
import { ButtonProps } from "../types"

const Button: React.FC<ButtonProps> = ({ title, link }) => {

  return (
    <div className="container">
          <section className="section">
          <div className="level">
            <div className="level-item">
              <Link
                href={link}
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

export default Button