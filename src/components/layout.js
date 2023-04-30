import React from "react";
import { Helmet } from "react-helmet"




export default function Layout({children}) {
  return(
  <>
      <Helmet htmlAttributes={{lang: 'en',}}>
        <meta charSet="utf-8" />
        <title>Cosmic Tales - v1</title>
        <meta name="description" content="Learn about the solar system 1 planet at a time." />
        <link rel="canonical" href="https://sleepygallows.com" />
      </Helmet>
      <main>{children}</main>
</>
  )
}