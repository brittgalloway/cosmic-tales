import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--jupiter-brown);
    }

`
export default function jupiter () {
    return(
        <StyledDiv>
            <Planet
                name = 'jupiter'
                storyUrl = '/jupiter/story'
                factsUrl = '/jupiter/facts'
            />
        </StyledDiv>
    )
  }