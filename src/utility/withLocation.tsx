import React from "react"
import { useRouter } from "next/router"
import queryString from "query-string"

interface NextLocation {
  pathname: string
  search: string
  hash: string
}

interface WithLocationProps {
  location: NextLocation
  navigate: (to: string) => void
  search: queryString.ParsedQuery<string>
}

const withLocation =
  <P extends object>(
    ComponentToWrap: React.ComponentType<P & WithLocationProps>
  ) =>
  (props: P): React.JSX.Element => {
    const router = useRouter()

    const location: NextLocation = {
      pathname: router.pathname,
      search: router.asPath.includes("?") ? router.asPath.split("?")[1] : "",
      hash: "",
    }

    return (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={(to: string) => router.push(to)}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )
  }

export default withLocation
