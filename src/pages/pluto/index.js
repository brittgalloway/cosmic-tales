import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--pluto-brown);
    }

`
export default function pluto () {
    return(
        <StyledDiv>
            <Planet
                name = 'pluto'
                storyUrl = '/pluto/story'
                factsUrl = '/pluto/facts'
            />
        </StyledDiv>
    )
  }