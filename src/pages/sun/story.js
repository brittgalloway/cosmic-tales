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
        flex-direction: row-reverse;
        width: 100%;
        height: 100%;
    }
`
export default function SunStory () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='sunImage'></span>
                
                <section className='story'>   
                    <h1>
                        The Sun
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