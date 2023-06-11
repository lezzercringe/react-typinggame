import { Button } from "components/ui/Button";
import { getDatabase, ref, set } from "firebase/database";
import { useRestartGame } from "hooks/useRestartGame";
import { useToggle } from "hooks/useToggle";
import { useEffect, useState } from "react";
import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";
import { useUserStore } from "store/useUserStore";
import { countMistakes } from "utils/countMistakes";

export const Result = () => {
  const database = getDatabase();
  const uid = useUserStore((state) => state.user?.uid);

  // ui needed states
  const [isResultSaved, toggleIsResultSaved] = useToggle(false);
  const [isResultSavedSuccess, toggleIsResultSavedSuccess] = useToggle(false);

  // store states
  const { currentText, enteredText } = useTextStore((state) => ({
    currentText: state.text,
    enteredText: state.enteredText,
    resetEnteredText: state.resetEnteredText,
  }));

  const [textWordsCount, setTextWordsCount] = useState<number>(0);
  useEffect(() => {
    setTextWordsCount(currentText.split(" ").length);
  }, [currentText]);

  const { time } = useTimerStore((state) => ({
    time: state.timer,
    setTime: state.setTime,
  }));

  const restart = useRestartGame(false);
  const countedWPM = Math.floor(textWordsCount / (time / 60));

  const { count: mistakesCount } = countMistakes(enteredText, currentText);
  const onSaveResult = () => {
    toggleIsResultSaved();

    if (!uid) {
      return false;
    }
    set(ref(database, `results/${uid}/${Date.now()}`), {
      wpm: countedWPM,
      mistakesCount: mistakesCount,
      date: new Date(Date.now()).toUTCString(),
    }).then(() => {
      toggleIsResultSavedSuccess();
    });
  };

  return (
    <>
      <div className="mt-5">
        Result is {countedWPM} WPM. Good! Count of mistakes is {mistakesCount}.
      </div>
      <button
        onClick={restart}
        className="mt-5 rounded p-2 text-blue-500 transition-all hover:text-blue-600"
      >
        Try again
      </button>

      {uid ? (
        isResultSavedSuccess ? (
          "Result saved successfully"
        ) : (
          <Button
            disabled={isResultSaved}
            onClick={onSaveResult}
            variant="primary"
          >
            Save result!
          </Button>
        )
      ) : (
        "signup to save your result"
      )}
    </>
  );
};
