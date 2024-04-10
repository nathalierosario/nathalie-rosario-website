import ClearBoard from "./ClearBoardButton";
import AddInstructionButton from "./AddInstructionButton";

export default function GameButtons() {
  return (
    <div className="d-flex justify-content-between">
      <ClearBoard />
      <AddInstructionButton />
    </div>
  );
}
