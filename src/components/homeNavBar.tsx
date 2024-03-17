import {
  HStack,
  Text,
  Flex,
  Spacer,
  Box,
  Avatar,
  Button,
} from "@chakra-ui/react";
import CreateSurveyModel from "./createSurveyModel.tsx";

const HomeNavBar = () => {
  return (
    <Box>
      <Flex>
        <Text>My Feedback Form</Text>
        <Spacer />
        <HStack>
          <CreateSurveyModel />
          <Avatar name="Greg McCarthy" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default HomeNavBar;
