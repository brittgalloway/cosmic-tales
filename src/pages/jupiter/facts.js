import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Facts from '../../components/facts';

import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--jupiter-brown);
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function jupiterFacts () {
    return(
        <Layout>
            <StyledDiv>
                <section className='planet'>
                    
                    <span className='solarObject'></span>
                    <Facts
                        name = 'jupiter'
                        majorMoons = '4'
                        confirmMoons = '79'
                        rotation = '10h 55m'
                        revolution = '11.86 years'
                        unique = "How can Jupiter's rotation be 10 hours? Figuring out Jupiter's rotation is complicated because it rotates at different speeds at different denisities. The 10 hours is the speed of the core."
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }