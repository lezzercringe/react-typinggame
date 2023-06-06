import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { MainLayout } from "./MainLayout";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";
import { useUserStore } from "store/useUserStore";
import { RequireAuth } from "./RequireAuth";
import { Suspense, lazy } from "react";
import { Fallback } from "./ui/Fallback";

export const Router = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  const AccountPage = lazy(() => import("pages/AccountPage"));

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
                <Suspense fallback={<Fallback />}>
                  <AccountPage />
                </Suspense>
              </RequireAuth>
            }
          />
        }
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
