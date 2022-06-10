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
                        majorMoons = '2'
                        confirmMoons = '2'
                        rotation = ' days'
                        revolution = '11.86 years'
                        unique = 'Jupiter is the largest planet.'
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }