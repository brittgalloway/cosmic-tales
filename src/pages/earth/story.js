import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .solarObject {
        background-color: var(--earth-blue);
    }
    .planet {
        flex-direction: row-reverse;
    }
`
export default function earthStory () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='solarObject'></span>
                
                <section className='story'>   
                    <h1>
                        earth
                    </h1>
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