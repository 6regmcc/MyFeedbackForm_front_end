import {
  HStack,
  Text,
  Flex,
  Spacer,
  Box,
  Avatar,
  Button,
} from "@chakra-ui/react";
import CreateSurvey from "./createSurvey.tsx";

const HomeNavBar = () => {
  return (
    <Box>
      <Flex>
        <Text>My Feedback Form</Text>
        <Spacer />
        <HStack>
          <CreateSurvey />
          <Avatar name="Greg McCarthy" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default HomeNavBar;
