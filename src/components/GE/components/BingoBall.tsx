import { useBingo } from "../hooks/BingoContext";
import { START_GAME, CALL_NEXT_NUM } from "../hooks/GameReducer";
import { getLetterForNumber } from "../utils/BingoUtils";

export default function BingoBall() {
  const { state, dispatch } = useBingo();
  const { gameStarted, currentNum } = state;

  const handleClick = () => {
    if (!gameStarted) {
      dispatch({ type: START_GAME });
    } else {
      dispatch({ type: CALL_NEXT_NUM });
    }
  };

  return (
    <div>
      <button
        className={`start-game-button circle width-75 fsize-lg ${gameStarted ? "robo-font" : ""}`}
        onClick={handleClick}
      >
        <span>
          {gameStarted
            ? getLetterForNumber(currentNum) + " " + currentNum
            : "START GAME"}
        </span>
      </button>
    </div>
  );
}
