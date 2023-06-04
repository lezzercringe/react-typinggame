import { ButtonHTMLAttributes, ReactNode } from "react";
import { DetailedHTMLProps, FC } from "react";

type Props = {
  title?: string;
  variant: "primary" | "outlined" | "danger";
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
  const baseStyles = "p-1 rounded transition-all border-2 border-blue-500";
  const classNames = (() => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white border-2 hover:text-blue-500 hover:bg-white hover:border-2 hover:border-blue-500";
      case "danger":
        return "bg-red-500 text-white border-red-500 border-2 hover:text-red-500 hover:bg-white hover:border-2 hover:border-red-500";
      case "outlined":
        return "text-blue-500";
    }
  })();

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
