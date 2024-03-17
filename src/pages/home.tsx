import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.tsx";

const Home = () => {
  // @ts-ignore
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>Home page {user.accessToken}</h1>
    </div>
  );
};

export default Home;
