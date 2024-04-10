import { createContext, useReducer, useContext, ReactNode } from "react";
import { GameState, Action } from "../BingoTypes";
import { initialState } from "../utils/BingoInitialState";
import { GameReducer } from "./GameReducer";

interface BingoContextType {
  state: GameState;
  dispatch: React.Dispatch<Action>;
}

const BingoContext = createContext<BingoContextType | undefined>(undefined);

interface BingoProviderProps {
  children: ReactNode;
}

export const BingoProvider: React.FC<BingoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <BingoContext.Provider value={{ state, dispatch }}>
      {children}
    </BingoContext.Provider>
  );
};

export const useBingo = (): BingoContextType => {
  const context = useContext(BingoContext);
  if (!context) throw new Error("useBingo must be used within a BingoProvider");
  return context;
};
