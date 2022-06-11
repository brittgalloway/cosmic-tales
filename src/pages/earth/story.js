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
                    <Link to='../' > 
                        <h1>
                            Earth
                        </h1>
                    </Link>
                    <article>
                        <p>The little blue spot, young and full of life.</p>
                        <p>The only planet agreeable to life as we know it.</p>
                    </article>
                </section> 
            </main>
        </StyledDiv>
    )
  }