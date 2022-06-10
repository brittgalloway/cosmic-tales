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
        flex-direction: row;
        justify-content: end;
      }

`
export default function SunFacts () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='solarObject'></span>
                
                <section className='facts'>  
                    <Link to='../' >
                        <h1>The Sun</h1>
                    </Link>
                    <article>
                        <ul>
                            <li>
                                The sun is a yellow dwarf star
                            </li>
                            <li>
                                4.5 billion-year-old star
                            </li>
                            <li>
                                Its gravity holds the solar system together
                            </li>
                            <li>
                                The Sun's core is about 27 million degrees Fahrenheit
                            </li>
                        </ul>
                        <dl>
                            <dt>Unique Fact</dt>
                            <dd>Everything in our solar system revovles around the sun. All 9 planets, all the dwarf planets, asteriods, and comets. But did you know millions of suns (stars) have their own solar systems and are moving in a large circle in the Milky Way? </dd>
                        </dl>
                    </article>
                    <Link to = '/'>Show me the Solar System</Link>
                </section> 
            </main>
        </StyledDiv>
    )
  }