import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "components/ui/Button";
import { getDatabase, ref, set } from "firebase/database";
import { useRestartGame } from "hooks/useRestartGame";
import { useToggle } from "hooks/useToggle";
import { useEffect, useState } from "react";
import { useTextStore } from "store/useTextStore";
import { useTimerStore } from "store/useTimerStore";
import { useUserStore } from "store/useUserStore";
import { countMistakes } from "utils/countMistakes";
import { ResultRow } from "./ResultRow";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex w-full flex-col space-y-5  text-gray-500 lg:w-1/2"
      >
        <div className="flex items-center space-x-4 text-xl">
          <h1 className="text-gray-500">Result</h1>
          <button className="text-xl " onClick={restart}>
            <Icon
              className="rounded bg-gray-500 p-1 text-2xl text-white"
              icon="solar:restart-bold"
            />
          </button>
        </div>
        <div className="flex flex-col space-y-3 divide-y-2">
          <ResultRow name="WPM" value={countedWPM} />
          <ResultRow name="Mistakes" value={mistakesCount} />
          <ResultRow name="Entered words count" value={textWordsCount} />
        </div>

        {uid ? (
          !(isResultSaved && !isResultSavedSuccess) ? (
            <Button
              disabled={isResultSaved}
              onClick={onSaveResult}
              variant={isResultSaved ? "disabled" : "primary"}
            >
              {!isResultSaved
                ? "Save result!"
                : "Your result was saved successfully"}
            </Button>
          ) : (
            <div className="text-red-200 ">Error happened</div>
          )
        ) : (
          "signup to save your result"
        )}
      </motion.div>
    </>
  );
};
