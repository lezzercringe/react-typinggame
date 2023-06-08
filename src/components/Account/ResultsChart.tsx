import { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import { Result } from "types/ResultsData";

type Props = {
  results: Result[];
};

export const ResultsChart = ({ results }: Props) => {
  // wpm: number;
  // id: string;
  // date: string;
  // mistakesCount: number;

  const primaryAxis = useMemo(
    (): AxisOptions<Result> => ({
      getValue: (result) => result.date,
      invert: true,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<Result>[] => [
      {
        getValue: (result) => result.wpm,
        elementType: "area",
      },
    ],
    []
  );
  return (
    <div className="h-full w-full">
      <Chart
        options={{
          data: [{ data: results }],
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
