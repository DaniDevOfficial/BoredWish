import { RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";
import {SignUp} from "./pages/SignUp.tsx";
import {User} from "./pages/User.tsx";




const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true, // same path as parent: "/"
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "user",
        element: <User />,
      }
    ],
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
