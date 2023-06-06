import { motion } from "framer-motion";
import { Link as LinkType } from "types/Link";
import { AppNavLink } from "./AppNavLink";
import { getAuth, signOut } from "firebase/auth";
import { useUserStore } from "store/useUserStore";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "components/ui/Button";

type Props = {
  links: LinkType[];
};
export const AppNavigation = (props: Props) => {
  const auth = getAuth();
  const { currentUserEmail, isAuth } = useUserStore((state) => ({
    currentUserEmail: state.user?.email,
    isAuth: state.isAuth,
  }));

  const signOutHandler = () => signOut(auth);

  return (
    <motion.nav
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-5"
    >
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
    </motion.nav>
  );
};
