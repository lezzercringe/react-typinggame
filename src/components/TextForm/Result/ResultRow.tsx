type Props = {
  name: string;
  value: string | number;
};

export const ResultRow = ({ name, value }: Props) => {
  return (
    <div className="flex justify-between">
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};
