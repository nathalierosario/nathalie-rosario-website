import { useState } from "react";
import { useBingo } from "../hooks/BingoContext";
import { ADD_INSTRUCTION } from "../hooks/GameReducer";
import ModalPop from "../utils/ModalPop";
import AddInstructionForm from "./InstructionForm";

export default function AddInstructionButton() {
  const { dispatch } = useBingo();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const addInstruction = (newInstruction: string) => {
    dispatch({ type: ADD_INSTRUCTION, payload: newInstruction });
  };

  return (
    <div>
      <button className="underline-btn" onClick={handleOpenModal}>
        INSTRUCTIONS
      </button>

      <ModalPop
        show={showModal}
        onClose={handleCloseModal}
        title="INSTRUCTIONS"
      >
        <AddInstructionForm addInstruction={addInstruction} />
      </ModalPop>
    </div>
  );
}
