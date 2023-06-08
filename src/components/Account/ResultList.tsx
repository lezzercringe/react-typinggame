import { Result } from "types/ResultsData";
import { ResultBadge } from "./ResultBadge";

type Props = {
  resultsData: Result[];
};

export const ResultList = ({ resultsData }: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-lg font-semibold">Your previous results:</h1>
      <div className="flex flex-col space-y-2 divide-y-2">
        {resultsData.map((result) => {
          return <ResultBadge key={result.id} result={result} />;
        })}
      </div>
    </div>
  );
};
