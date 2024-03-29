import {
  HStack,
  Text,
  Flex,
  Spacer,
  Box,
  Avatar,
  Image,
} from "@chakra-ui/react";
import CreateSurveyModel from "../createSurveyModel.tsx";
import MyFeedbackForm_large from "../../images/MyFeedbackForm_large.png";
const HomeNavBar = () => {
  return (
    <Box>
      <Flex>
        <HStack>
          <Box boxSize="200px">
            <Image src={MyFeedbackForm_large} alt="My feedback from" />
          </Box>
          <Text fontSize="5xl">My Surveys</Text>
        </HStack>

        <Spacer />
        <HStack>
          <Box mx={8}>
            <CreateSurveyModel />
          </Box>

          <Avatar size="lg" name="Greg McCarthy" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default HomeNavBar;
