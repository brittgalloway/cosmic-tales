import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .solarObject {
        background-color: var(--sun-yellow);
        box-shadow: 0px 0px 50px 30px rgba(242, 209, 34, 0.25);
    }
    .planet {
        flex-direction: row-reverse;
        justify-content: start;
      }
`
export default function SunStory () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='solarObject'></span>
                
                <section className='story'> 
                    <Link to='../' > 
                        <h1>
                            The Sun
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