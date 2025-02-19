import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomeScreen from "../components/pages/landingPage/HomeScreen";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AuthLayout from "../components/Layout/AuthLayout";
import FirstTimeLogin from "../components/auth/firstTimeScreen/FirstTimeLogin";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        path: "register",
        element: <Register />,
      },
      {
        index: true,
        path: "firstlogin",
        element: <FirstTimeLogin />,
      },
    ],
  },
]);
