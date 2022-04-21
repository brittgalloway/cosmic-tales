import * as React from 'react'
import { Link } from 'gatsby';
import '../global.scss'

export default function Sun () {
   const handleClick = function (){
        const h2 = document.getElementsByClassName('story').nodeName;
        console.log(h2);
    //  if(h2.hasClassName('hide')){
    //      h2.removeClass('hide');
    //  }else{
    //     h2.addClassName('hide');
    //  }  
    }
    return(
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
    )
  }