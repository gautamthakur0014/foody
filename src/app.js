import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import ResturantMenu from "./RestaurantMenu";

const root = ReactDom.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
       {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/resturants/:resId",
    element: <ResturantMenu/>,
  },
    ],
    errorElement: <Error/>,
  },
 
]);

root.render(<RouterProvider router={appRouter} />);
