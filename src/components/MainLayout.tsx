import { Link } from "types/Link";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  const links: Link[] = [
    {
      id: 0,
      title: "Home",
      href: "/",
    },
  ];

  return (
    <>
      <Header links={links} />
      <div className="mt-5 sm:px-5 lg:px-14">
        <Outlet />
      </div>
    </>
  );
};
