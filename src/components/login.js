import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/staff/sound-form`)
    }

    return (
      <div className="container">
        <h1>Log in</h1>
        <form
          name="staff login form"
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/staff/profile`)
          }}
        >
          <div className="field">
            <label className="label is-small has-text-white">Username</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  type="text"
                  name="username"
                  onChange={this.handleUpdate}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Password</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-link has-background-danger"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
