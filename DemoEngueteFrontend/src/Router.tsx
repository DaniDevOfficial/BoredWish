import { RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/Home";
import { Signup } from "./pages/Signup.tsx";
import {Login} from "./pages/Login.tsx";
import {User} from "./pages/User.tsx";
import {CreateGroup} from "./pages/CreateGroup.tsx";
import {Group} from "./pages/Group.tsx";
import {GroupMembers} from "./pages/GroupMembers.tsx";




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
        element: <Signup />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "createGroup",
        element: <CreateGroup />,
      },
      {
        path: "group/:groupId",
        element: <Group />,
      },
      {
        path: "group/:groupId/members",
        element: <GroupMembers />,
      }
    ],
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
