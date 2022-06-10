import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--saturn-purple);
    }

`
export default function saturn () {
    return(
        <StyledDiv>
            <Planet
                name = 'saturn'
                storyUrl = '/saturn/story'
                factsUrl = '/saturn/facts'
            />
        </StyledDiv>
    )
  }