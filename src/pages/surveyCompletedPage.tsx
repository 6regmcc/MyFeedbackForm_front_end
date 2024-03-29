import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import MyFeedbackForm_large from "../images/MyFeedbackForm_large.png";
import Login from "../components/login.tsx";

const SurveyCompletedPage = () => {
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
              <Stack>
                <Center>
                  <Text fontSize="6xl" color="gray">
                    Survey Completed
                  </Text>
                </Center>

                <Box boxSize="600">
                  <Image src={MyFeedbackForm_large} alt="My feedback from" />
                </Box>
              </Stack>
            </Center>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
};

export default SurveyCompletedPage;
