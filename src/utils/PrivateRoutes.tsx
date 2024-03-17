import { Navigate, Outlet, Location, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth.ts";

const PrivateRoutes = () => {
  // @ts-ignore
  const { user } = useAuth();
  const location = useLocation();

  return user.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;

//https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
//https://www.youtube.com/watch?v=2k8NleFjG7I
//https://www.youtube.com/watch?v=oUZjO00NkhY&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=3
