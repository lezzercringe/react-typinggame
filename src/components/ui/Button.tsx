import { ButtonHTMLAttributes, ReactNode } from "react";
import { DetailedHTMLProps, FC } from "react";

type Props = {
  title?: string;
  variant: "primary" | "outlined";
  children?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<Props> = ({
  title,
  children,
  variant,
  className: propsClassName = "",
  ...props
}) => {
  const baseStyles = "p-2 rounded transition-all border-2 border-blue-500";
  const classNames =
    variant === "outlined"
      ? "text-blue-500"
      : "bg-blue-500 text-white border-2 hover:text-blue-500 hover:bg-white hover:border-2 hover:border-blue-500";

  return (
    <button
      className={`${baseStyles} ${classNames} ${propsClassName}`}
      {...props}
    >
      {title && title}
      {children && children}
    </button>
  );
};
