import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--earth-blue);
    }

`
export default function Earth () {
    return(
        <StyledDiv>
            <Planet
                name = 'Earth'
                storyUrl = '/earth/story'
                factsUrl = '/earth/facts'
            />
        </StyledDiv>
    )
  }