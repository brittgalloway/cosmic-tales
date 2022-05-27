import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`
    .sunImage {
        border-radius: 50%;
        width: 50vw;
        height: 50vw;
        background-color: var(--sun-yellow);
        box-shadow: 0px 0px 50px 30px rgba(242, 209, 34, 0.25);
        align-self: end;
        &:hover{
            cursor: default;
        }
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function SunFacts () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='sunImage'></span>
                
                <section className='facts'>   
                    <h1>
                        The Sun
                    </h1>
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
                            <dt>Fun Fact</dt>
                            <dd>Everything in our solar system revovles around the sun. All 9 planets, all the dwarf planets, asteriods, and comets. But did you know millions of suns (stars) have their own solar systems and are moving in a large circle in the Milky Way? </dd>
                        </dl>
                    </article>
                    <Link to = '/'>Show me the Solar System</Link>
                </section> 
            </main>
        </StyledDiv>
    )
  }