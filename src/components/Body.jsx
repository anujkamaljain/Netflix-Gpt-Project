import Browse from "./Browse";
import SignUp from "./SignUp";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
