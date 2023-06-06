import { Button } from "components/ui/Button";
import { getDatabase, ref, set } from "firebase/database";
import { useToggle } from "hooks/useToggle";
import { useEffect, useState } from "react";
import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";
import { useUserStore } from "store/useUserStore";

export const Result = () => {
  const database = getDatabase();
  const uid = useUserStore((state) => state.user?.uid);
  const [isResultSaved, toggleIsResultSaved] = useToggle(false);
  const [isResultSavedSuccess, toggleIsResultSavedSuccess] = useToggle(false);
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
  const countedWPM = Math.floor(textWordsCount / (time / 60));

  const onSaveResult = () => {
    toggleIsResultSaved();

    if (!uid) {
      return false;
    }
    set(ref(database, `results/${uid}/${Date.now()}`), {
      wpm: countedWPM,
      date: new Date(Date.now()).toUTCString(),
    }).then(() => {
      toggleIsResultSavedSuccess();
    });
  };

  return (
    <>
      <div className="mt-5">Result is {countedWPM} WPM. Good!</div>
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
