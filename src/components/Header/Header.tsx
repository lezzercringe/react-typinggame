import { Link as LinkType } from "types/Link";
import { AppNavLink } from "./AppNavLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useUserStore } from "store/useUserStore";
import { Button } from "components/ui/Button";
import { getAuth, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";

type Props = {
  links: LinkType[];
};

export const Header = (props: Props) => {
  const auth = getAuth();

  const { currentUserEmail, isAuth } = useUserStore((state) => ({
    currentUserEmail: state.user?.email,
    isAuth: state.isAuth,
  }));

  const signOutHandler = () => signOut(auth);
  return (
    <div className="flex h-16 w-full items-center justify-between  px-20">
      <div className="image">
        <Icon
          opacity={0.5}
          icon="material-symbols:keyboard-outline"
          width={32}
          height={32}
        />
      </div>
      <nav className="flex items-center space-x-5">
        {props.links.map((link) => (
          <AppNavLink key={link.id} link={link} />
        ))}
        {isAuth && (
          <>
            <NavLink to={"/account"}>
              <div className="flex items-center justify-center space-x-2 rounded bg-gray-100 p-2">
                <Icon icon="ri:user-3-fill" />
                <span>{currentUserEmail}</span>
              </div>
            </NavLink>
            <Button onClick={signOutHandler} variant="danger">
              <Icon icon="ri:logout-box-r-line" />
            </Button>
          </>
        )}
      </nav>
    </div>
  );
};
