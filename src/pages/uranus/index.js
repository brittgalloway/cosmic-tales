import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--uranus-green);
    }

`
export default function uranus () {
    return(
        <StyledDiv>
            <Planet
                name = 'uranus'
                storyUrl = '/uranus/story'
                factsUrl = '/uranus/facts'
            />
        </StyledDiv>
    )
  }