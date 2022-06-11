import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--jupiter-brown);
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
                            Jupiter
                        </h1>
                    </Link>
                    <article>
                        <p>The first planet to form.</p>
                        <p>It grew to an immeasurable size and sucked asteriods, comets and "would-be-planets" into its orbit</p>
                        <p id='likeSun'>Jupiter wanted to be like the sun.</p>
                        <p>One day, Jupiter saw a particularly beautiful <span id='callisto'>ice planet</span> approach and trapped it in orbit.</p>
                    </article>
                </section> 
            </main>
        </StyledDiv>
    )
  }