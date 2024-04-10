import { useEffect, useState } from "react";
import { useBingo } from "../hooks/BingoContext";

export default function BlinkCaret() {
  const { state } = useBingo();
  const { instructions } = state;
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 300; // Slowed down typing speed, kept constant

  useEffect(() => {
    if (instructions.length === 0) return;

    let timer: number;
    let delayBeforeDeletingTimer: number;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((currentText) => currentText.slice(0, currentText.length - 1));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(instructions[loopNum].substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === instructions[loopNum]) {
      // Introduce a delay before starting to delete the text
      delayBeforeDeletingTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // 1-second delay before start deleting
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1 >= instructions.length ? 0 : loopNum + 1);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(delayBeforeDeletingTimer);
    };
  }, [text, isDeleting, loopNum, instructions]);

  return instructions.length > 0 ? (
    <span className="typing-effect">{text}</span>
  ) : null;
}
