import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .solarObject {
        background-color: var(--mercury-grey);
    }
    .planet {
        flex-direction: row-reverse;
    }
`
export default function mercuryStory () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='solarObject'></span>
                
                <section className='story'> 
                    <Link to='../' > 
                        <h1>
                            Mercury
                        </h1>
                    </Link>   
                    <article>
                        <p>The tiniest planet flies around the sun.</p>
                        <p>It lost it's atosphere to the heat a long time ago, but doesn't mind.</p>
                        <p>Unlike its siblings, Mercury is fine just flying around the sun.</p>
                    </article>
                </section> 
            </main>
        </StyledDiv>
    )
  }