import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--mars-red);
    }

`
export default function mars () {
    return(
        <StyledDiv>
            <Planet
                name = 'mars'
                storyUrl = '/mars/story'
                factsUrl = '/mars/facts'
            />
        </StyledDiv>
    )
  }