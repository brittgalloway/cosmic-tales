import * as React from "react";
import { Link } from 'gatsby';
import "../global.scss";

export default function Facts (props) {
    return (
      
            <article className='facts'>   
                <h1>
                {props.name}
                </h1>
                <section>
                    <dl>
                        <dt>Major Moons: </dt>
                        <dd>{props.majorMoons}</dd>
                        <dt>Confirmed moons:</dt>
                        <dd>{props.confirmMoons}</dd>
                        <dt>Rotation:</dt>
                        <dd>{props.rotation}</dd>
                        <dt>Revolutions:</dt>
                        <dd>{props.revolution}</dd>
                        <dt>Unique Fact: </dt>
                        <dd>{props.unique}</dd>
                    </dl>
                </section>
                <Link to = '/'>Show me the Solar System</Link>
            </article> 
    )
}