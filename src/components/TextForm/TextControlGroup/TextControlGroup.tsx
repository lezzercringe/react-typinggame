import { GroupWhileActive } from "./GroupWhileActive";
type Props = {
  currentTime: number;
  timerRef: number | null;
};

export const TextControlGroup = ({ currentTime: time, timerRef }: Props) => {
  return (
    <div className=" h-6 w-full ">
      {timerRef ? <GroupWhileActive time={time} /> : <span></span>}
    </div>
  );
};
