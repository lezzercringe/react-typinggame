import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDistanceToNow } from "date-fns";
import { Result } from "types/ResultsData";

type Props = {
  result: Result;
};

export const ResultBadge = ({ result }: Props) => {
  return (
    <div className="flex w-full justify-between">
      {result.wpm} WPM
      <span className="flex items-center space-x-1 text-gray-400">
        <Icon icon="bx:alarm" />
        <span>{formatDistanceToNow(Date.parse(result.date))} ago</span>
      </span>
    </div>
  );
};
