import cn from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { START_DATE } from "../consts";
import { hidePopups, useSelector } from "../store";

function getHoursRemaining() {
  const now = new Date();
  const diff = now.getTime() - START_DATE.getTime();
  const hoursRemaining = 24 - ((diff / 1000 / 60 / 60) % 24);
  if (hoursRemaining > 0.95) {
    return hoursRemaining.toFixed(0);
  } else {
    return hoursRemaining.toFixed(1);
  }
}
export default function About() {
  const dispatch = useDispatch();
  const [hoursRemaining, setHoursRemaining] = useState(getHoursRemaining);
  const shown = useSelector((s) => s.popups.about);

  useEffect(() => {
    // Update hoursRemaining every time popup is opened
    if (shown) {
      setHoursRemaining(getHoursRemaining);
    }
  }, [shown]);

  return (
    <div className={cn("popup-wrapper", !shown && "hidden")}>
      <div className="popup">
        <p>Vind alle 32 Duotrigordle woorden in 37 pogingen!</p>
        <p>
          Een nieuwe dagelijkse Duotrigordle komt beschikbaar in {hoursRemaining} uur.
        </p>
        <hr className="separator" />
        <p>Duotrigordle NL van CrazyHenk</p>
        <p>
          Broncode op{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/CrazyHenk44/duotrigordle-nl"
          >
            GitHub
          </a>
        </p>
        <hr className="separator" />
        <p>Original Duotrigordle by Bryan Chen</p>
        <p>
          Source code on{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/thesilican/duotrigordle"
          >
            GitHub
          </a>
        </p>
        <hr className="separator" />
        <p>Based on</p>
        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://hexadecordle.co.uk/"
            >
              Hexadecordle
            </a>{" "}
            by Alfie Rayner
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://octordle.com/">
              Octordle
            </a>{" "}
            by Kenneth Crawford
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://quordle.com/">
              Quordle
            </a>{" "}
            by @fireph
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://zaratustra.itch.io/dordle"
            >
              Dordle
            </a>{" "}
            by Guilherme S. Töws
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.nytimes.com/games/wordle/index.html"
            >
              Wordle
            </a>{" "}
            by Josh Wardle
          </li>
        </ul>
        <button className="close" onClick={() => dispatch(hidePopups())}>
          Sluiten
        </button>
      </div>
    </div>
  );
}
