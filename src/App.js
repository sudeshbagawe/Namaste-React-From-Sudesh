import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Error from "./Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Contact.js";
import RestraurantMenu from "./components/RestraurantMenuPage.js";




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

// Rendering the Root Component
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/RestraurantMenu/:resid",
        element:<RestraurantMenu/>
      }
    ],

    errorElement: <Error />,
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
