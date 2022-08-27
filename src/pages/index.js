import * as React from 'react'
import {Tooltip, TooltipSun} from './../components/tooltip'
import '../global.scss'

// markup
const IndexPage = () => {
  const [show, setShow] = React.useState(false);
  console.log("I'm default!", show)
  const handleClick = function (){
    if(!show){
      setShow(true);
      console.log("was true, now false!", show)
    }
    if(show){
      setShow(false);
      console.log("was false, Now true!", show)
    }
  }
  return (
    <>
      <header>
        <h1>
          The Solar System
        </h1>
        <h2>
          Learn About Our Planets
        </h2>
      </header>
      <main>
      
        <span id="sun"
          onClick={handleClick}
        >
          <TooltipSun 
          text='The Sun'/>
        </span>
    
        <span id="mercury">
          <Tooltip 
          text = 'mercury'
          majorMoons = '0'
          confirmMoons = '0'
          rotation = '59 days'
          revolution = '88 days'
          unique = 'Mercury has no atmosphere.' 
          />
        </span>

        <span id="venus">
          <Tooltip 
          text = 'venus'
          majorMoons = '0'
          confirmMoons = '0'
          rotation = '116 days'
          revolution = '225 days'
          unique = 'Venus rotates on its axis backward.'
          />  
        </span>
    
        <span id="earth">
          <Tooltip 
          text = 'earth'
          majorMoons = '1'
          confirmMoons = '1'
          rotation = '24 hours'
          revolution = '365 days'
          unique = 'Only known planet with intelligent life.'
          />
        </span>
      
        <span id="mars">
          <Tooltip 
          text = 'mars'
          majorMoons = '2'
          confirmMoons = '2'
          rotation = ' days'
          revolution = ' days'
          unique = 'Mars has ice, and is thought to have been a living planet similar to Earth.'
          />
        </span>
      
        <span id="jupiter">
          <Tooltip 
          text = 'jupiter'
          majorMoons = '4'
          confirmMoons = '79'
          rotation = '10h 55m'
          revolution = '11.86 years'
          unique = "How can Jupiter's rotation be 10 hours? Figuring out Jupiter's rotation is complicated because it rotates at different speeds at different denisities. The 10 hours is the speed of the core."
          />
        </span>
      
        <span id="saturn">
          <Tooltip 
          text = 'saturn'
          majorMoons = '2'
          confirmMoons = '82'
          rotation = '10h 40m'
          revolution = '29.46 years'
          unique = 'Saturn has thousands of rings. It is made of asteriods, dust, and other space matter.'
          />
        </span>
        
        <span id="uranus">
          <Tooltip 
          text = 'uranus'
          majorMoons = '1'
          confirmMoons = '27'
          rotation = '17h 14m'
          revolution = '84 years'
          unique = "Uranus' axis is at 98&#176; and rotates clockwise while every other planet (except Venus) rotates counter-clockwise"
          />
        </span>
      
        <span id="neptune">
          <Tooltip 
          text = 'neptune'
          majorMoons = '1'
          confirmMoons = '14'
          rotation = '164.8 years'
          revolution = '18.5 hours'
          unique = "Neptune has extreme temperatures and high pressure. Because of this, scientists believe Neptune makes diamonds (compressed carbon) in the clouds; creating diamond rain."
          />
        </span>
      
        <span id="pluto">
          <Tooltip 
          text = 'pluto'
          majorMoons = '1'
          confirmMoons = '5'
          rotation = '248 years'
          revolution = '6 days'
          unique = "Pluto is the smallest planet and on a slightly different plane than the other planets. As such it is a contraversial planet, offically being a dwarf planet, though it doesn't fully match those requirements either."
          />
        </span>
      
        <span id="asteriodBelt">
          {/* <Tooltip text = 'The Asteriod Belt'/> */}
        </span>
        
      </main>
      <div class="stars"></div>
      <div class="stars1"></div>
      <div class="stars2"></div>
      <div class="shooting-stars"></div>
    </ >
  )
}

export default IndexPage
