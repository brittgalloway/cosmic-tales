import * as React from "react"
import { Link } from 'gatsby';
import "../global.scss"

export default function Story (prop) {
    return (
       <article>
            <h1>
                <Link to='../' >{props.name}</Link> 
            </h1>
            <section>
                <p>some text</p>
                {prop.story}
             </section>
            <Link to={prop.related}>
                <p>Tell me another one</p>
            </Link>
       </article> 
    )
};

