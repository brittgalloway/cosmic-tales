import * as React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import '../global.scss';

const StyledDiv = styled.div`
    .solarObject {
        --diameter: 25rem;
    }
    a {
    margin: 2rem;
    width: fit-content;
    align-self: center;
    cursor: pointer;
    font-family: "Expletus Sans", cursive;
    text-align: center;
    width: 100vw;
    font-size: 2rem;
    color: white;
    text-decoration: none;
        &:hover{
            cursor: pointer;
        }
    }

`
export default function planet (props) {
    return (
        <Layout>
            <StyledDiv>
                <section className='index'>
                    <h1 className='hide'>
                        {props.name}
                    </h1>
                    <Link to = {props.storyUrl}>Tell me a story</Link>
                    <span className='solarObject'></span>
                    <Link to = {props.factsUrl} >Tell me the facts</Link>
                </section>
            </StyledDiv>
        </Layout>
    )
}