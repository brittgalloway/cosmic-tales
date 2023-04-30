import * as React from "react";
import "../global.scss";

export function Planet({ planetName, majorMoons, confirmMoons, rotation, revolution, unique}) {
    const [show, setShow] = React.useState(false);

    function showClick(){
      setShow(current => show ? false : true);
  }
    return (
      <span id={planetName} onClick={()=> showClick()}> 
        <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'} >
            <h3>{planetName}</h3>
            <dl>
                <dt>Major Moons: </dt>
                <dd>{majorMoons}</dd>
                <dt>Confirmed moons:</dt>
                <dd>{confirmMoons}</dd>
                <dt>Rotation:</dt>
                <dd>{rotation}</dd>
                <dt>Revolutions:</dt>
                <dd>{revolution}</dd>
                <dt>Unique Fact: </dt>
                <dd>{unique}</dd>
            </dl>
        </div>
      </div>
        </span>
    );
  };

export function TooltipSun ({text}) {
  const [show, setShow] = React.useState(false);

  function showClick(){
    setShow(current => show ? false : true);
  }
  
    return (
      <span id="sun" onClick={()=> showClick()}> 
        <div className="tooltip-container">
          <div className={show ? 'tooltip-box visible' : 'tooltip-box'} >
              <h3>{text}</h3>
              <ul>
                <li>
                    The sun is a yellow dwarf star
                </li>
                <li>
                    4.5 billion-year-old star
                </li>
                <li>
                    Its gravity holds the solar system together
                </li>
                <li>
                    The Sun's core is about 27 million degrees Fahrenheit
                </li>
              </ul>
              <dl>
                  <dt>Unique Fact</dt>
                  <dd>Everything in our solar system revovles around the sun. All 9 planets, all the dwarf planets, asteriods, and comets. But did you know millions of suns (stars) have their own solar systems and are moving in a large circle in the Milky Way? </dd>
              </dl>
          </div>
        </div>  
      </span> 
    );
  };
