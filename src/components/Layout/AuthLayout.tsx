import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={`${pathname === "/auth"}`}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
