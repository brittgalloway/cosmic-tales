import * as React from 'react';
import {TooltipSun, Planet} from './../components/tooltip';
import '../global.scss';

const IndexPage = () => {

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
      
        <TooltipSun 
        text='The Sun'/>

        <Planet
            planetName= "mercury"
            majorMoons= "0"
            confirmMoons= "0"
            rotation= "59 days"
            revolution= "88 days"
            unique= "Mercury has no atmosphere."
        />
        <Planet
            planetName= "venus"
            majorMoons= "0"
            confirmMoons= "0"
            rotation= "116 days"
            revolution= "225 days"
            unique= "Venus rotates on its axis backward."
        />
        <Planet
            planetName= "earth"
            majorMoons= "1"
            confirmMoons= "1"
            rotation= "24 hours"
            revolution= "365 days"
            unique= "Only known planet with intelligent life."
        />
        <Planet
            planetName= "mars"
            majorMoons= "2"
            confirmMoons= "2"
            rotation= "24.6 hours"
            revolution= "687 days"
            unique= "Mars has ice, and is thought to have been a living planet similar to Earth."
        />
        <Planet
            planetName= "jupiter"
            majorMoons= "4"
            confirmMoons= "79"
            rotation= "10h 55m"
            revolution= "11.86 years"
            unique= "How can Jupiter's rotation be 10 hours? Figuring out Jupiter's rotation is complicated because it rotates at different speeds at different denisities. The 10 hours is the speed of the core."
        />
        <Planet
            planetName= "saturn"
            majorMoons= "2"
            confirmMoons= "82"
            rotation= "10h 40m"
            revolution= "29.46 years"
            unique= "Saturn has thousands of rings. It is made of asteriods, dust, and other space matter."
        />
        <Planet
            planetName= "uranus"
            majorMoons= "1"
            confirmMoons= "27"
            rotation= "17h 14m"
            revolution= "84 years"
            unique= "Uranus' axis is at 98&#176; and rotates clockwise while every other planet (except Venus) rotates counter-clockwise."
        />
        <Planet
            planetName= "neptune"
            majorMoons= "1"
            confirmMoons= "14"
            rotation= "18.5 hours"
            revolution= "164.8 years"
            unique= "Neptune has extreme temperatures and high pressure. Because of this, scientists believe Neptune makes diamonds (compressed carbon) in the clouds; creating diamond rain."
        />
        <Planet
            planetName= "pluto"
            majorMoons= "1"
            confirmMoons= "5"
            rotation= "6 days"
            revolution= "248 years"
            unique= "Pluto is the smallest planet and on a slightly different plane than the other planets. As such it is a contraversial planet, offically being a dwarf planet, though it doesn't fully match those requirements either."
        />
        
        <span id="asteriodBelt"></span>
        
      </main>
      <div class="stars"></div>
      <div class="stars1"></div>
      <div class="stars2"></div>
      <div class="shooting-stars"></div>
    </ >
  )
}

export default IndexPage
