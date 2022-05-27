import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--sun-yellow);
        box-shadow: 0px 0px 50px 30px rgba(242, 209, 34, 0.25);
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
export default function Sun () {
    return(
        <StyledDiv>
            <main className='planet'>
                <h1 className='hide'>
                    Sun
                </h1>
                <Link to ='/sun/story'>Tell me a story</Link>
                <span className='solarObject'></span>
                <Link to ='/sun/facts' >Tell me the facts</Link>
            </main>
        </StyledDiv>
    )
  }