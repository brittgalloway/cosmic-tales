import * as React from "react"
import { Link } from 'gatsby';
import "../global.scss"


const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        I probably didn't make this page yet.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
