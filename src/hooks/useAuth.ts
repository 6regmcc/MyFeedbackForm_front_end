import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.tsx";

const useAuth = () => {
  console.log("useAuth called");
  console.log(AuthContext);
  return useContext(AuthContext);
};

export default useAuth;
