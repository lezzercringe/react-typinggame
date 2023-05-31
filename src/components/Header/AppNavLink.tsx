import { Link } from "types/Link";
import { NavLink } from "react-router-dom";
type Props = {
  link: Link;
};

export const AppNavLink = ({ link }: Props) => {
  return (
    <NavLink to={link.href}>
      {({ isActive }) => {
        return (
          <span className={isActive ? "text-blue-400" : "text-black"}>
            {link.title}
          </span>
        );
      }}
    </NavLink>
  );
};
