import { Spinner } from "./Spinner";

export const Fallback = () => {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <Spinner />
    </div>
  );
};
