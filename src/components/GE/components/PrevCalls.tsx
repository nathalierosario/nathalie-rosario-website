import { useBingo } from "../hooks/BingoContext";
import { getLetterForNumber } from "../utils/BingoUtils";

export default function PrevCalls() {
  const { state } = useBingo();
  const { previousCalls } = state;

  const lastThree = previousCalls.slice(-3).reverse();

  return previousCalls.length > 0 ? (
    <div className="flex-col-center py-3 round-corners width-100">
      <span className="fw-b">PREVIOUS CALLS</span>

      <div className="flex-row-center gap-sm robo-font width-50">
        {lastThree.map((number) => (
          <div
            key={number}
            className={`circle width-20 flex-row-center color-${getLetterForNumber(
              number
            )}`}
          >
            <div>{getLetterForNumber(number)}</div>
            <div>{number}</div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
