import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { PATH } from "../constants/paths";

import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import PublicLayout from "@/components/layout/PublicLayout";

const NotFound = () => <div className="p-6">404 - Not Found</div>;

export const routes: RouteObject[] = [
  {
    element: <PublicLayout />, 
    children: [
      { path: "/", element: <Navigate to={PATH.HOME} replace /> },

      { path: PATH.LOGIN, element: <SignIn /> },
      { path: PATH.REGISTER, element: <SignUp /> },
      { path: PATH.FORGETPASSWORD, element: <ForgotPassword /> },
      { path: PATH.RESETPASSWORD, element: <ResetPassword /> },
    ],
  },

  { path: "*", element: <NotFound /> },
];
