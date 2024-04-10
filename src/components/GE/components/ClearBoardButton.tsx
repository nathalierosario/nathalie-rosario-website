import { useBingo } from "../hooks/BingoContext";
import { CLEAR_BOARD } from "../hooks/GameReducer";

export default function ClearBoard() {
  const { dispatch } = useBingo();

  const handleClear = () => {
    dispatch({ type: CLEAR_BOARD });
  };

  return (
    <div>
      <button className="underline-btn" onClick={handleClear}>CLEAR BOARD</button>
    </div>
  );
}
