import { parse, formatDistanceToNow } from "date-fns";
import { Result } from "types/ResultsData";

type Props = {
  result: Result;
};

export const ResultBadge = ({ result }: Props) => {
  return (
    <div className="flex w-full justify-between">
      {result.wpm} WPM
      <span className="text-gray-400">
        {formatDistanceToNow(Date.parse(result.date))} ago
      </span>
    </div>
  );
};
