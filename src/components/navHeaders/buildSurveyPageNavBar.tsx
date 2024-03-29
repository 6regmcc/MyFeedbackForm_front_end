import {
  HStack,
  Text,
  Flex,
  Spacer,
  Box,
  Avatar,
  Button,
  Image,
} from "@chakra-ui/react";
import CreateSurveyModel from "../createSurveyModel.tsx";
import CreatePageModel from "../createPageModel.tsx";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import MyFeedbackForm_large from "../../images/MyFeedbackForm_large.png";

const BuildSurveyPageNavBar = () => {
  return (
    <Box>
      <Flex>
        <HStack>
          <Box boxSize="200px">
            <Image src={MyFeedbackForm_large} alt="My feedback from" />
          </Box>
          <Box boxShadow="xs" p="3" rounded="md" bg="white">
            <Text pl={5} fontSize="3xl">
              Build Survey
            </Text>
          </Box>

          <Spacer />
          <Box boxShadow="xs" p="3" rounded="md" bg="white">
            <HStack>
              <Text pl={5} fontSize="3xl" color="gray">
                View Results
              </Text>
              <MdOutlineArrowForwardIos color="gray" />
            </HStack>
          </Box>
        </HStack>
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
