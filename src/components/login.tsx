import { useState, useEffect, useContext } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
import AuthContext from "../context/AuthProvider.tsx";
import axios from "../api/axios";

const LOGIN_URL = "/auth/token";

const Login = () => {
  // @ts-ignore
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.access_token;
      setAuth({ email, pwd, accessToken });
      setSuccess(true);
    } catch (error) {
      // @ts-ignore
      if (!error?.response) {
        setError("No Server Response");
        // @ts-ignore
      } else if (error.response?.status === 400) {
        // @ts-ignore
        setError(error.response?.data.detail);
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <Box>
      {success ? (
        <h1>Login successful</h1>
      ) : (
        <form>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleSubmit}>Login</Button>
        </form>
      )}
    </Box>
  );
};

export default Login;
