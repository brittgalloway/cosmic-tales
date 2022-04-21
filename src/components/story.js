import * as React from "react"
import { Link } from 'gatsby';
import "../global.scss"

export default function Story () {
    return (
       <article>
            <h1>
               {planet.name}
            </h1>
            <section>
                {planet.story}
            </section>
            <Link to={planet.related}>
                <p>Tell me another one</p>
            </Link>
       </article> 
    )
}

