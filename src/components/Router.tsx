import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { MainLayout } from "./MainLayout";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
