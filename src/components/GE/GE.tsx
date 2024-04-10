import { BingoProvider } from "./hooks/BingoContext";
import BingoPage from "./pages/BingoPage";

export default function GE() {
  return (
    <BingoProvider>
      <BingoPage />
    </BingoProvider>
  );
}
