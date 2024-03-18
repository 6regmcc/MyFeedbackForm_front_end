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
import CreatePageModel from "./createPageModel.tsx";

const BuildSurveyPageNavBar = () => {
  return (
    <Box>
      <Flex>
        <Text>My Feedback Form</Text>
        <Spacer />
        <HStack>
          <CreatePageModel />
          <Avatar name="Greg McCarthy" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default BuildSurveyPageNavBar;
