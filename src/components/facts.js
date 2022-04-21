import * as React from "react"
import "../global.scss"

export default function Facts () {
    return (
       <article>
            <h1>
               {planet.name}
            </h1>
            <section>
                {planet.Facts}
            </section>
       </article> 
    )
}