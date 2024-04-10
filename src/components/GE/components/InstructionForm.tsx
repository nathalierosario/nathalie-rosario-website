import React, { useState } from "react";
import CheckMark from "../icons/Check";

interface AddInstructionFormProps {
  addInstruction: (instruction: string) => void;
}

export default function AddInstructionForm({
  addInstruction,
}: AddInstructionFormProps) {
  const [instruction, setInstruction] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!instruction.trim()) return;
    addInstruction(instruction);
    setInstruction("");
  };

  return (
    <form
      className="custom-form d-flex justify-content-between"
      onSubmit={handleSubmit}
    >
      <input
        id="instructionInput"
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        placeholder="ENTER INSTRUCTIONS"
        className="flex-grow-true me-1"
      />
      <button className="glass-btn rounded" type="submit">
        <CheckMark size="1em" />
      </button>
    </form>
  );
}
