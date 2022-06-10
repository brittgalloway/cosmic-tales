import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--neptune-blue);
    }

`
export default function neptune () {
    return(
        <StyledDiv>
            <Planet
                name = 'neptune'
                storyUrl = '/neptune/story'
                factsUrl = '/neptune/facts'
            />
        </StyledDiv>
    )
  }