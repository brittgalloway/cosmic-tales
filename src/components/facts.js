import * as React from "react"
import "../global.scss"

export default function Facts (props) {
    return (
       <article>
            <h1>
               {props.name}
            </h1>
            <section>
                {props.facts}
            </section>
       </article> 
    )
}