import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  registration?: UseFormRegisterReturn<Props["name"]>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<Props> = ({ registration, ...props }) => {
  return (
    <input
      {...registration}
      className="outline-non rounded border-2  border-gray-200 p-1 focus:outline-none"
      {...props}
    />
  );
};
