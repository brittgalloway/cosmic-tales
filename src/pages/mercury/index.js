import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--mercury-grey);
    }
    a {
    margin: 2rem;
    width: fit-content;
    align-self: center;
    cursor: pointer;
    font-family: "Expletus Sans", cursive;
    text-align: center;
    width: 100vw;
    font-size: 2rem;
    color: white;
    text-decoration: none;
        &:hover{
            cursor: pointer;
        }
    }

`
export default function mercury () {
    return(
        <StyledDiv>
            <main className='planet'>
                <h1 className='hide'>
                    mercury
                </h1>
                <Link to ='/mercury/story'>Tell me a story</Link>
                <span className='solarObject'></span>
                <Link to ='/mercury/facts' >Tell me the facts</Link>
                
                <section id = 'facts' className='hide'>
                    <article>
                        <p>some text</p>
                    </article> 
                </section>
            </main>
        </StyledDiv>
    )
  }