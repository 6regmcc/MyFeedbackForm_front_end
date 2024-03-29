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
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import MyFeedbackForm_large from "../../images/MyFeedbackForm_large.png";
import { useNavigate, useParams } from "react-router-dom";

const BuildSurveyPageNavBar = () => {
  const navigate = useNavigate();
  const { survey_id } = useParams();
  return (
    <Box>
      <Flex>
        <HStack>
          <Box boxSize="200px">
            <Image src={MyFeedbackForm_large} alt="My feedback from" />
          </Box>
          <ChakraLink
            as={ReactRouterLink}
            to={`/build/${survey_id}`}
            boxShadow="xs"
            p="3"
            rounded="md"
            bg="white"
          >
            <Text pl={5} fontSize="3xl">
              Build Survey
            </Text>
          </ChakraLink>

          <Spacer />
          <ChakraLink
            as={ReactRouterLink}
            to={`/survey_results/${survey_id}`}
            boxShadow="xs"
            p="3"
            rounded="md"
            bg="white"
          >
            <HStack>
              <Text pl={5} fontSize="3xl" color="gray">
                View Results
              </Text>
              <MdOutlineArrowForwardIos color="gray" />
            </HStack>
          </ChakraLink>
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
