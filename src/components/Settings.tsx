import cn from "classnames";
import { useDispatch } from "react-redux";
import { hidePopups, updateSettings, useSelector } from "../store";

export function Settings() {
  const dispatch = useDispatch();
  const shown = useSelector((s) => s.popups.settings);
  const {
    colorBlindMode,
    showTimer,
    wideMode,
    hideCompletedBoards,
    animateHiding,
    hideKeyboard,
  } = useSelector((s) => s.settings);

  return (
    <div className={cn("popup-wrapper", !shown && "hidden")}>
      <div className="popup">
        <div className="group">
          <input
            type="checkbox"
            id="colorblind-mode"
            checked={colorBlindMode}
            onChange={(e) =>
              dispatch(updateSettings({ colorBlindMode: e.target.checked }))
            }
          />
          <label htmlFor="colorblind-mode">Modus voor kleurenblinden</label>
        </div>
        <div className="group">
          <input
            type="checkbox"
            id="show-timer"
            checked={showTimer}
            onChange={(e) =>
              dispatch(updateSettings({ showTimer: e.target.checked }))
            }
          />
          <label htmlFor="show-timer">Toon timer</label>
        </div>
        <div className="group">
          <input
            type="checkbox"
            id="wide-mode"
            checked={wideMode}
            onChange={(e) =>
              dispatch(updateSettings({ wideMode: e.target.checked }))
            }
          />
          <label htmlFor="wide-mode">Meer borden in de breedte</label>
        </div>
        <div className="group">
          <input
            type="checkbox"
            id="hide-completed-boards"
            checked={hideCompletedBoards}
            onChange={(e) =>
              dispatch(
                updateSettings({ hideCompletedBoards: e.target.checked })
              )
            }
          />
          <label htmlFor="hide-completed-boards">Verberg afgeronde woorden</label>
        </div>
        <div
          className={cn(
            "group",
            "animate-hiding",
            !hideCompletedBoards && "active"
          )}
        >
          <input
            type="checkbox"
            id="animate-hiding"
            checked={animateHiding}
            onChange={(e) =>
              dispatch(updateSettings({ animateHiding: e.target.checked }))
            }
            disabled={!hideCompletedBoards}
          />
          <label htmlFor="animate-hiding">Vervagen</label>
        </div>
        <div className="group">
          <input
            type="checkbox"
            id="hide-keyboard"
            checked={hideKeyboard}
            onChange={(e) =>
              dispatch(updateSettings({ hideKeyboard: e.target.checked }))
            }
          />
          <label htmlFor="hide-keyboard">Verberg toetsenbord</label>
        </div>
        <button className="close" onClick={() => dispatch(hidePopups())}>
          Sluiten
        </button>
      </div>
    </div>
  );
}
