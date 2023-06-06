import { TextControlGroup, TextField } from ".";
import { Result } from "./Result/Result";
import { useTimer } from "hooks/useTimer";
import { useCleanup } from "hooks/useCleanup";
export const TextForm = () => {
  const [isFinished, time, timerRef] = useTimer();

  useCleanup();

  return (
    <div className="mt-36 flex w-full items-center justify-center ">
      <div className="w-1/3 space-y-6">
        <TextControlGroup timerRef={timerRef} currentTime={time} />
        {!isFinished ? <TextField /> : <Result />}
      </div>
    </div>
  );
};
