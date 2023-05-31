import { useEffect, useRef, useState } from "react";
import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";

export const useTimer = (): [boolean, number, number | null] => {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const setTimer = useTimerStore((state) => state.setTime);
  const { enteredText, currentText } = useTextStore((state) => ({
    enteredText: state.enteredText,
    currentText: state.text,
  }));

  useEffect(() => {
    if (enteredText.length === currentText.length && intervalIdRef.current) {
      setTimer(time);
      setIsFinished(true);
      setTime(0);
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    enteredText.length === 0 && setIsFinished(false);

    if (enteredText.length === 1 && intervalIdRef.current === null) {
      intervalIdRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  }, [enteredText, currentText]);

  return [isFinished, time, intervalIdRef.current];
};
