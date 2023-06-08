import { ResultList } from "components/Account/ResultList";
import { useEffect, useState } from "react";
import { Result } from "types/ResultsData";
import { getDatabase, ref } from "firebase/database";
import { useUserStore } from "store/useUserStore";
import { Spinner } from "components/ui/Spinner";
import { unpackFBresults } from "utils/unpackFBresults";
import { fetchUserResults } from "apifirebase/baseQueries";
import { ResultsChart } from "components/Account/ResultsChart";

const AccountPage = () => {
  const database = getDatabase();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultsData, setResultsData] = useState<Result[]>([]);
  const uid = useUserStore((state) => state.user?.uid);

  useEffect(() => {
    if (uid) {
      setIsLoading(true);
      fetchUserResults(uid, ref(database))
        .then((results) => {
          setResultsData(
            unpackFBresults<Omit<Result, "id">>(results.val())
              .map((el, index) => ({ ...el, id: index.toString() }))
              .slice(-5, results.val().length)
              .reverse()
          );
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [uid, database]);

  return (
    <div className="grid grid-cols-4 grid-rows-2 space-x-4">
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <div className="flex min-h-[250px] flex-col justify-between space-y-2 rounded border-2 border-gray-200 bg-gray-100 p-4">
          {!isLoading ? (
            <ResultList resultsData={resultsData} />
          ) : (
            <div className="flex min-h-[200px] w-full items-center justify-center">
              <Spinner />
            </div>
          )}
          <div className="text-lg">Keep going!</div>
        </div>
      </div>
      <div className="col-span-4 row-span-2  md:col-span-2 lg:col-span-2">
        <div className="flex h-full w-full flex-col space-y-5 rounded border-2 border-gray-200 p-4">
          <h1 className="text-lg font-bold">Chart</h1>
          {resultsData.length > 0 && <ResultsChart results={resultsData} />}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
