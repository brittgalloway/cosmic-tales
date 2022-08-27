import * as React from "react";
import "../global.scss";

export function Tooltip ({ children, text, majorMoons, confirmMoons, rotation, revolution, unique, ...rest }) {
    const [show, setShow] = React.useState(false);
  
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'} 

        {...rest}>
            <h3>{text}</h3>
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
            {children}
        </div>
      </div>
    );
  };
export function TooltipSun ({ children, text, ...rest }) {
    const [show, setShow] = React.useState(false);
  
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'} 
        
        {...rest}>
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
            {children}
        </div>
      </div>
    );
  };
