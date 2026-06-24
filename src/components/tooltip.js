import * as React from "react";
import "../global.scss";

// React (through at least v18, and this project is on v17) doesn't know
// about the popover / popovertarget / popovertargetaction attributes —
// passing them as JSX props (`popover="auto"`, `popoverTarget="x"`) gets
// silently dropped or throws an "unknown attribute" warning. The fix is
// to set them directly on the DOM node via a ref callback, which sidesteps
// React's attribute allowlist entirely. See: facebook/react#27479, #27486.
function makePopoverTargetRef(targetId) {
  return (el) => {
    if (el) {
      el.setAttribute("popovertarget", targetId);
    }
  };
}

// Shared info-box markup, used by both Planet and TooltipSun.
// Rendered as a native popover: anchored to its trigger button,
// dismissible with Esc or an outside click, and reachable by keyboard
// since the trigger is a real <button> wired to popovertarget.
function InfoPopover({ id, anchorName, title, children }) {
  return (
    <div
      id={id}
      popover="auto"
      role="dialog"
      aria-label={title}
      className="tooltip-box"
      style={{ "--anchor-name": anchorName }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function Planet({
  planetName,
  majorMoons,
  confirmMoons,
  rotation,
  revolution,
  unique,
}) {
  const popoverId = `${planetName}-info`;
  const anchorName = `--${planetName}-anchor`;

  return (
    <div className="planet-wrap" style={{ "--anchor-name": anchorName }}>
      <button
        type="button"
        id={planetName}
        className="planet"
        ref={makePopoverTargetRef(popoverId)}
        aria-label={`${planetName} facts`}
      />
      <InfoPopover id={popoverId} anchorName={anchorName} title={planetName}>
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
      </InfoPopover>
    </div>
  );
}

export function TooltipSun({ text }) {
  const popoverId = "sun-info";
  const anchorName = "--sun-anchor";

  return (
    <div className="planet-wrap" style={{ "--anchor-name": anchorName }}>
      <button
        type="button"
        id="sun"
        className="planet"
        ref={makePopoverTargetRef(popoverId)}
        aria-label={`${text} facts`}
      />
      <InfoPopover id={popoverId} anchorName={anchorName} title={text}>
        <ul>
          <li>The sun is a yellow dwarf star</li>
          <li>4.5 billion-year-old star</li>
          <li>Its gravity holds the solar system together</li>
          <li>The Sun's core is about 27 million degrees Fahrenheit</li>
        </ul>
        <dl>
          <dt>Unique Fact</dt>
          <dd>
            Everything in our solar system revovles around the sun. All 9
            planets, all the dwarf planets, asteriods, and comets. But did
            you know millions of suns (stars) have their own solar systems
            and are moving in a large circle in the Milky Way?
          </dd>
        </dl>
      </InfoPopover>
    </div>
  );
}