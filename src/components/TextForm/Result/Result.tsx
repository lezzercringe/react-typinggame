import { useEffect, useState } from "react";
import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";

export const Result = () => {
  const currentText = useTextStore((state) => state.text);
  const [textWordsCount, setTextWordsCount] = useState<number>(0);
  useEffect(() => {
    setTextWordsCount(currentText.split(" ").length);
  }, [currentText]);

  const { time, setTime } = useTimerStore((state) => ({
    time: state.timer,
    setTime: state.setTime,
  }));

  const resetEnteredText = useTextStore((state) => state.resetEnteredText);

  const restart = () => {
    setTime(0);
    resetEnteredText();
  };

  return (
    <>
      <div className="mt-5">
        Result is {Math.floor(textWordsCount / (time / 60))} WPM. Good!
      </div>
      <button
        onClick={restart}
        className="mt-5 rounded p-2 text-blue-500 transition-all hover:text-blue-600"
      >
        Try again
      </button>
    </>
  );
};
