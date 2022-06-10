import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Facts from '../../components/facts';

import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--venus-orange);
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function venusFacts () {
    return(
        <Layout>
            <StyledDiv>
                <section className='planet'>
                    
                    <span className='solarObject'></span>
                    <Facts
                        name = 'venus'
                        majorMoons = '0'
                        confirmMoons = '0'
                        rotation = '116 days'
                        revolution = '225 days'
                        unique = 'Venus rotates on its axis backward.'
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }