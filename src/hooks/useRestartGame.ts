import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";

export const useRestartGame = (turnOffTimer?: boolean): (() => void) => {
  const resetEnteredText = useTextStore((state) => state.resetEnteredText);
  const setTime = useTimerStore((state) => state.setTime);
  const setIsStopped = useTimerStore((state) => state.setIsStopped);
  return () => {
    resetEnteredText();
    setTime(0);
    turnOffTimer && setIsStopped(true);
  };
};
