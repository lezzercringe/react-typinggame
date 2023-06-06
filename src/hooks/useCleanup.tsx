import { useEffect } from "react";
import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";

export const useCleanup = () => {
  const resetText = useTextStore((state) => state.resetEnteredText);
  const setTime = useTimerStore((state) => state.setTime);

  useEffect(() => {
    resetText();
    setTime(0);
  }, []);
};
