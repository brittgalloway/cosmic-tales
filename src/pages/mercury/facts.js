import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Facts from '../../components/facts';

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
        <Layout>
            <StyledDiv>
                <section className='planet'>
                    
                    <span className='solarObject'></span>
                    <Facts
                        majorMoons = '0'
                        confirmedMoons = '0'
                        rotation = 'x days'
                        revolution = 'x days'
                        unique = 'no atmosphere'
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }