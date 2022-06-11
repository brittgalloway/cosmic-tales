import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .solarObject {
        background-color: var(--saturn-purple);
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
                <span className='rings'></span>
                <Link to='../' ><span className='titan'></span></Link>

                <section className='story'>   
                    <Link to='../' > 
                        <h1>
                            Saturn
                        </h1>
                    </Link>
                    <article>
                        <p>Saturn loved Jupiter for its strength.</p>
                        <p>But Jupiter pulled in a beautiful frozen planet named Callisto and only had eyes for them.</p>
                        <p>In an attempt to be more impressive, Saturn started collecting more stardust and planets of its own.</p>
                        <p>Now Saturn has amazing rings admired by everyone else.</p>
                    </article>
                </section> 
            </main>
        </StyledDiv>
    )
  }