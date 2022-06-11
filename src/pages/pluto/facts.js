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
                        majorMoons = '1'
                        confirmMoons = '5'
                        rotation = '248 years'
                        revolution = '6 days'
                        unique = "Pluto is the smallest planet and on a slightly different plane than the other planets. As such it is contraversial planet, offically being a dwarf planet, though it doesn't fully match those requirements either."
                    />
                </section>
            </StyledDiv>
        </Layout>
    )
  }