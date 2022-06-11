import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .solarObject {
        background-color: var(--pluto-brown);
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
                            Pluto
                        </h1>
                    </Link>
                    <article>
                        <p>Our Mother</p>
                        <p>Our guide throughout the universe. <br/> All matter will follow the circular flow.</p>
                        <p>As we go around and around the Milky Way.</p>
                    </article>
                </section> 
            </main>
        </StyledDiv>
    )
  }