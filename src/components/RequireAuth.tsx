import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
  isAuth: boolean | null;
};

export const RequireAuth = ({ children, isAuth }: Props) => {
  if (isAuth === true) {
    return <>{children}</>;
  }
  if (isAuth === false) {
    return <Navigate to={"/auth"} />;
  }
  return <></>;
};
