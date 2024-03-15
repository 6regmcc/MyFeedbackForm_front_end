import { useRef, useState, useEffect } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
import { Simulate } from "react-dom/test-utils";
import submit = Simulate.submit;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const passwordRequirements = {
    bg: "red.200",
  };

  const emailRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault;
    console.log("testsadfasdf");
    setSuccess(true);
  };

  return (
    <Box>
      {success ? (
        <h1>Account successfully registered</h1>
      ) : (
        <form>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired isInvalid={!validEmail && email.length > 0}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!validEmail ? (
              <FormHelperText>Enter your email address.</FormHelperText>
            ) : (
              <FormErrorMessage>Valid email is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            isInvalid={(!validPwd || !validMatch) && pwd.length != 0}
          >
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </FormControl>
          <FormControl
            isRequired
            isInvalid={(!validPwd || !validMatch) && pwd.length != 0}
          >
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={matchPwd}
              onChange={(e) => setMatchPwd(e.target.value)}
            />
            <FormHelperText>
              Password must be at least 8 characters and contain 1 lower case +
              1 upper case + 1 number + 1 special character
            </FormHelperText>
          </FormControl>
          <Button onClick={handleSubmit}>Register</Button>
        </form>
      )}
    </Box>
  );
};

export default Register;
