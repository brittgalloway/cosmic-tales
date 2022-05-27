import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`

    .mercuryImage {
        border-radius: 50%;
        width: 50vw;
        height: 50vw;
        background-color: var(--mercury-grey);
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
export default function mercuryStory () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='mercuryImage'></span>
                
                <section className='story'>   
                    <h1>
                        Mercury
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