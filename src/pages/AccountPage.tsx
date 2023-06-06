import { ResultList } from "components/Account/ResultList";

export const AccountPage = () => {
  return (
    <div>
      <div className="flex min-h-[250px] w-96 flex-col justify-between space-y-2 rounded border-2 border-gray-200 bg-gray-100 p-4">
        <ResultList />
        <div className="text-lg">Keep going!</div>
      </div>
    </div>
  );
};
