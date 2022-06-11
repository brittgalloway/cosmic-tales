import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Facts from '../../components/facts';

import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--neptune-blue);
    }
    .planet {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
      }

`
export default function neptuneFacts () {
    return(
        <Layout>
            <StyledDiv>
                <section className='planet'>
                    
                    <span className='solarObject'></span>
                    <Facts
                        name = 'neptune'
                        majorMoons = '1'
                        confirmMoons = '14'
                        rotation = '164.8 years'
                        revolution = '18.5 hours'
                        unique = ''
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }