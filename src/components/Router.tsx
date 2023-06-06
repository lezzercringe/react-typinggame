import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { MainLayout } from "./MainLayout";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";
import { useUserStore } from "store/useUserStore";
import { AccountPage } from "pages/AccountPage";
import { RequireAuth } from "./RequireAuth";

export const Router = () => {
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        {!isAuth && <Route path="/auth" element={<AuthPage />} />}
        {
          <Route
            path="/account"
            element={
              <RequireAuth isAuth={isAuth}>
                <AccountPage />
              </RequireAuth>
            }
          />
        }
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
