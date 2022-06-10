import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Facts from '../../components/facts';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--earth-blue);
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function earthFacts () {
    return(
        <Layout>
        <StyledDiv>
            <section className='planet'>
                
                <span className='solarObject'></span>
                <Facts
                    majorMoons = '1'
                    confirmedMoons = '1'
                    rotation = '24 hours'
                    revolution = '365 days'
                    unique = 'Only known planet with intelligent life.'
                />
            </section>
        </StyledDiv>
    </Layout>
    )
  }