import { useState, useEffect, useContext } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Text,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth.ts";
import axios from "../api/axios";
import qs from "qs";
import { AuthContext } from "../context/AuthProvider.tsx";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const LOGIN_URL = "/auth/token";

const Login = () => {
  // @ts-ignore
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

      //console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.access_token;
      const refreshToken = response?.data?.refresh_token;

      setUser({
        accessToken: accessToken,
      });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/");
    } catch (err) {
      // @ts-ignore
      setError(err?.response?.data?.detail);
    }
  };

  return (
    <Box height="300px " width="600px" m={10}>
      <HStack>
        <Text m={4} fontSize="2xl">
          Sign In
        </Text>
        <Spacer />
        <ChakraLink as={ReactRouterLink} to={`/register`}>
          <Text decoration="underline" m={4} fontSize="md">
            Register new account
          </Text>
        </ChakraLink>
      </HStack>
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
            my={4}
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
