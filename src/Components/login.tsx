import { useState, useEffect } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  Box,
} from "@chakra-ui/react";

const [email, setEmail] = useState("");
const [pwd, setPwd] = useState("");
const [success, setSuccess] = useState(false);

const handleSubmit = () => {
  console.log(email);
  setSuccess(true);
};

const Login = () => {
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
            <FormHelperText>Enter your email address.</FormHelperText>
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
