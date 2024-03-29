import {
  AbsoluteCenter,
  Box,
  Center,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import Register from "../components/register.tsx";
import MyFeedbackForm_large from "../images/MyFeedbackForm_large.png";

const RegisterPage = () => {
  return (
    <Box>
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <Stack>
            <Center>
              <Box boxSize="300">
                <Image src={MyFeedbackForm_large} alt="My feedback from" />
              </Box>
            </Center>
            <Box
              border="1px"
              borderColor="gray.200"
              boxShadow="lg"
              rounded="md"
            >
              <Register />
            </Box>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
};
export default RegisterPage;
