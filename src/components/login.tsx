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
import useAuth from "../hooks/useAuth.ts";
import axios from "../api/axios";
import qs from "qs";

const LOGIN_URL = "/auth/token";

const Login = () => {
  // @ts-ignore
  const { setAuth } = useAuth;
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    try {
      const response = await axios.post(
        LOGIN_URL,
        qs.stringify({ username: email, password: pwd }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        },
      );
      setSuccess(true);

      console.log(JSON.stringify(response?.data));

      const accessToken = response.data.access_token;
      //console.log(accessToken);
      //console.log("this is not opwrking ");
      setAuth({ email, pwd, accessToken });
    } catch (err) {
      // @ts-ignore
      setError(err?.response?.data?.detail);
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

          <FormControl isRequired isInvalid={error?.length > 0}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Button
            onClick={handleSubmit}
            isDisabled={email.length === 0 || pwd.length === 0}
          >
            Login
          </Button>
        </form>
      )}
    </Box>
  );
};

export default Login;
