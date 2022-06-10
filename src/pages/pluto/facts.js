import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Facts from '../../components/facts';

import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--pluto-brown);
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function plutoFacts () {
    return(
        <Layout>
            <StyledDiv>
                <section className='planet'>
                    
                    <span className='solarObject'></span>
                    <Facts
                        name = 'pluto'
                        majorMoons = '2'
                        confirmMoons = '2'
                        rotation = ' days'
                        revolution = ' days'
                        unique = 'pluto has ice, and is thought to have been a living planet similar to Earth.'
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }