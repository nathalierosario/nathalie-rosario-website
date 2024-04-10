import { useBingo } from "../hooks/BingoContext";
import { TOGGLE_CELL } from "../hooks/GameReducer";

export default function PatternBoard() {
  const { state, dispatch } = useBingo();

  const toggleCell = (letter: string, cellIndex: number) => {
    dispatch({ type: TOGGLE_CELL, payload: { letter, cellIndex } });
  };

  return (
    <div className="pattern-board width-100">
      {["B", "I", "N", "G", "O"].map((letter) => (
        <div key={letter} className="flex-col-center">
          <div className="letter">{letter}</div>
          {state.boardState[letter].map((toggled, index) => (
            <div
              className={`pattern-cell square width-100 flex-row-center dark-bg ${
                toggled ? "clicked" : ""
              }`}
              key={index}
              onClick={() => toggleCell(letter, index)}
            >
              {letter === "N" && index === 2 ? "FREE SPACE" : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
