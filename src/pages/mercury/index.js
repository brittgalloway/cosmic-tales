import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--mercury-grey);
    }

`
export default function Mercury () {
    return(
            <StyledDiv>
                <Planet
                    name = 'Mercury'
                    storyUrl = '/mercury/story'
                    factsUrl = '/mercury/facts'
                />
            </StyledDiv>
    )
  }