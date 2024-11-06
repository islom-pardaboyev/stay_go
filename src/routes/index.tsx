import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { SuspenseComponent as Suspense } from "../utils";
import NotFound from "../pages/notFound/NotFound";

function CustomRoutes() {
  const HomePage = lazy(() => import("../pages/home/Home"));
  const CategoriesPage = lazy(() => import("../pages/categories/Categories"));
  const SalesPage = lazy(() => import("../pages/sales/Sales"));
  return (
    <main className="flex flex-col">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/categories"
          element={
            <Suspense>
              <CategoriesPage />
            </Suspense>
          }
        />
        <Route
          path="/sales"
          element={
            <Suspense>
              <SalesPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFound/>
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default CustomRoutes;
