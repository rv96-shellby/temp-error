import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";

// Pages
import DefaultPage from "../pages/DefaultPage";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const BrowsePage = lazy(() => import("../pages/BrowsePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const DetailsPage = lazy(() => import("../components/Movies/MovieDetails"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DefaultPage />} />
      <Route
        path="login"
        element={
          <Suspense fallback={<p>Loading login page...</p>}>
            <LoginPage />
          </Suspense>
        }
      />

      <Route
        path="browse"
        element={
          <Suspense fallback={<p>Loading browse page...</p>}>
            <BrowsePage />
          </Suspense>
        }
      />

      <Route
        path="/movie/:id"
        element={
          <Suspense fallback={<p>Loading movie details...</p>}>
            <DetailsPage />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Suspense fallback={<p>Loading not found page...</p>}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>
  )
);

export default function RoutesConfig() {
  return <RouterProvider router={router} />;
}
