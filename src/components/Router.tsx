import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { MainLayout } from "./MainLayout";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";

export const Router = () => {
  const isAuth = false;

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        {!isAuth && <Route path="/auth" element={<AuthPage />} />}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
