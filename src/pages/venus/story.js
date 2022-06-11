import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .solarObject {
        background-color: var(--venus-orange);
    }
    .planet {
        flex-direction: row-reverse;
    }
`
export default function venusStory () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='solarObject'></span>
                
                <section className='story'>   
                    <Link to='../' > 
                        <h1>
                            Venus
                        </h1>
                    </Link> 
                    <article>
                        <p>In the beginning, Venus had a <span id='atmoshere'>calm atmosphere.</span></p>
                        <p>One day a Mercury-sized mass smashed into Venus. The force was enough to <span id='backward'>spin Venus backwards</span></p>
                        <p>Since then, Venus' clouds trapped in the sun's heat and volcanos errupted without warning.</p>
                        <p>From a far, the violence is a beautiful orange glow.</p>
                    </article>
                </section> 
            </main>
        </StyledDiv>
    )
  }