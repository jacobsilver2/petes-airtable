import auth0 from "auth0-js"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", true)
    navigate("/staff")
    cb()
  }
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}

// export const isBrowser = () => typeof window !== "undefined"

// export const getUser = () =>
//   isBrowser() && window.localStorage.getItem("gatsbyUser")
//     ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
//     : {}

// const setUser = user =>
//   window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

// export const handleLogin = ({ username, password }) => {
//   if (username === `john` && password === `pass`) {
//     return setUser({
//       username: `john`,
//       name: `Johnny`,
//       email: `johnny@example.org`,
//     })
//   }

//   return false
// }

// export const isLoggedIn = () => {
//   const user = getUser()

//   return !!user.username
// }

// export const logout = callback => {
//   setUser({})
//   callback()
// }
