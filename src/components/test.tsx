import { useContext } from "react";
import AuthContext from "../context/AuthProvider.tsx";

const Test = () => {
  // @ts-ignore
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default Text;
