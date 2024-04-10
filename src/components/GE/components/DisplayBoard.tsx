import AdultBingo from "../images/croppedadultbingo.png";
import { useBingo } from "../hooks/BingoContext";

export default function DisplayBoard() {
  const { state } = useBingo();
  const { currentNum, previousCalls } = state;

  const getNumClass = (number: number) => {
    if (currentNum === number) return "current";
    if (previousCalls.includes(number)) return "called";
    return "text-center";
  };

  return (
    <div className="display-board flex-col-center">
      <img src={AdultBingo} className="img-fluid round-top"></img>

      <div className="display-container d-flex justify-content-center width-100">
        <div className="bingo-headers d-flex flex-column fw-b">
          {["B", "I", "N", "G", "O"].map((letter) => (
            <div>{letter}</div>
          ))}
        </div>
        <div className="display-nums flex-grow-true robo-font">
          {Array.from({ length: 75 }, (_, i) => i + 1).map((number) => (
            <div className={`board-num ${getNumClass(number)}`}>{number}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
