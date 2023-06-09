import { Link } from "types/Link";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { useUserStore } from "store/useUserStore";
export const MainLayout = () => {
  const isAuth = useUserStore((state) => state.isAuth);

  const links: Link[] = [
    {
      id: 0,
      title: "Home",
      href: "/",
      noAuth: false,
    },
    {
      id: 1,
      title: "Sign in",
      href: "/auth",
      noAuth: true,
    },
  ].filter((link) => !(isAuth === link.noAuth && link.noAuth));

  return (
    <>
      <Header links={links} />
      <div className="mt-5 sm:px-5 lg:px-14">
        <Outlet />
      </div>
    </>
  );
};
