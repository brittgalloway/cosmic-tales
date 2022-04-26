import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../global.scss';

const StyledDiv = styled.div`
    .sunImage {
        --diameter: 25em;
        --offset:200px;
        border-radius: 50%;
        position: absolute;
        width: var(--diameter);
        height: var(--diameter);
        top: calc(50% - var(--offset));
        left: calc(50% - var(--offset));
        position: static;
        background-color: var(--sun-yellow);
        box-shadow: 0px 0px 50px 30px rgba(242, 209, 34, 0.25);
        align-self: center;
        &:hover{
            cursor: default;
        }
    }
    .planet {
        display: flex;
        flex-direction: column;
        justify-content: end;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
      .story, .facts {
        width: fit-content;
        align-self: center;
        cursor: pointer;
        z-index: 1;
      }

`
export default function Sun () {
   const handleClick = function (){
        const h2 = document.getElementsByName('h2');
        console.log(h2);
    //  if(h2.hasClassName('hide')){
    //      h2.removeClass('hide');
    //  }else{
    //     h2.addClassName('hide');
    //  }  
    }
    return(
        <StyledDiv>
            <main className='planet'>
                <h1 className='hide'>
                    Sun
                </h1>
                <h2 className='story' onClick={handleClick}>Tell me a story</h2>
                <span className='sunImage'></span>
                <h2 className='facts' onClick={handleClick}>Tell me the facts</h2>
                <section id = 'story' className='hide'>
                    <article>
                        <p>some text</p>
                    </article> 
                    <Link to='/'>
                        <p>Tell me another one</p>
                    </Link>
                </section>
                <section id = 'facts' className='hide'>
                    <article>
                        <p>some text</p>
                    </article> 
                </section>
            </main>
        </StyledDiv>
    )
  }