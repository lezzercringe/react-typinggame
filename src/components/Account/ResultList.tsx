import { useEffect, useState } from "react";
import { Result } from "types/ResultsData";
import { ResultBadge } from "./ResultBadge";
import { getDatabase, ref } from "firebase/database";
import { useUserStore } from "store/useUserStore";
import { fetchUserResults, unpackResults } from "apifirebase/userResults";
import { ClipLoader } from "react-spinners";

export const ResultList = () => {
  const database = getDatabase();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultsData, setResultsData] = useState<Result[]>([]);
  const uid = useUserStore((state) => state.user?.uid);

  useEffect(() => {
    if (uid) {
      setIsLoading(true);
      fetchUserResults(uid, ref(database))
        .then((results) => {
          setResultsData(unpackResults(results.val()));
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [uid, database]);

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-lg font-semibold">Your previous results:</h1>
      <div className="flex flex-col space-y-2 divide-y-2">
        {isLoading ? (
          <div className="flex h-20 w-full items-center justify-center">
            <ClipLoader color="blue" />
          </div>
        ) : resultsData.length > 0 ? (
          resultsData.map((result) => {
            return <ResultBadge key={result.id} result={result} />;
          })
        ) : (
          <div>Empty</div>
        )}
      </div>
    </div>
  );
};
