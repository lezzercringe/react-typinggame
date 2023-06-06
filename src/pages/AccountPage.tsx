import { ResultList } from "components/Account/ResultList";

const AccountPage = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <div className="flex min-h-[250px] flex-col justify-between space-y-2 rounded border-2 border-gray-200 bg-gray-100 p-4">
          <ResultList />
          <div className="text-lg">Keep going!</div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
