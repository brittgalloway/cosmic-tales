import * as React from "react"
import { Link } from 'gatsby';
import "../global.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <header>
        <h1>
          Cosmic Tales 
        </h1>
        <h2>
          Learn About Our Solar System
        </h2>
      </header>
      <main>
        {/* <span className="star"></span>*/}
        <Link to="/sun">
          <span id="sun"></span>
        </Link>
        <Link to="/mercury">
          <span id="mercury"></span>
        </Link>
        <Link to="/venus">
          <span id="venus"></span>
        </Link>
        <Link to="/earth">
          <span id="earth"></span>
        </Link>
        <Link to="/mars">
          <span id="mars"></span>
        </Link>
        <Link to="/jupiter">
          <span id="jupiter"></span>
        </Link>
        <Link to="/saturn">
          <span id="saturn"></span>
        </Link>
        <Link to="/uranus">
          <span id="uranus"></span>
        </Link>
        <Link to="/neptune">
          <span id="neptune"></span>
        </Link>
        <Link to="/pluto">
          <span id="pluto"></span>
        </Link>
        <Link to="/asteriods">
          <span id="asteriodBelt"></span>
        </Link>
      </main>
    </ >
  )
}

export default IndexPage
