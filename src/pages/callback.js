import React from "react"
import { handleAuthentication } from "../services/auth";

const Callback = () => {
  handleAuthentication()

  return <p>Loading...</p>
}

export default Callback