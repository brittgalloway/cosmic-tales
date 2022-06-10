import * as React from 'react';
import styled from 'styled-components';
import Planet from '../../components/planet';
import '../../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        background-color: var(--venus-orange);
    }

`
export default function Venus () {
    return(
        <StyledDiv>
            <Planet
                name = 'Venus'
                storyUrl = '/venus/story'
                factsUrl = '/venus/facts'
            />
        </StyledDiv>
    )
  }