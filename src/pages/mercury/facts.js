import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--mercury-grey);
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function mercuryFacts () {
    return(
        <StyledDiv>
            <main className='planet'>
                
                <span className='solarObject'></span>
                
                <section className='facts'>   
                    <h1>
                        Mercury
                    </h1>
                    <article>
                        <dl>
                            <dt>Major Moons: </dt>
                            <dd>0</dd>
                            <dt>Confirmed moons:</dt>
                            <dd>0</dd>
                            <dt>Rotation</dt>
                            <dd></dd>
                            <dt>Revolutions:</dt>
                            <dd></dd>
                            <dt>Unique Fact: </dt>
                            <dd></dd>
                        </dl>
                    </article>
                    <Link to = '/'>Show me the Solar System</Link>
                </section> 
            </main>
        </StyledDiv>
    )
  }