import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import MenuPage from "./components/MenuPage";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Skeleton from "./components/Skeleton";

const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/About"));

function AppLayout() {
  return (
    <div className="app box-border text-white">
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Skeleton />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/res/:resId",
        element: <MenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
