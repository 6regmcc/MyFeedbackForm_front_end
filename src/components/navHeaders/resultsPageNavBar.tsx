import {
  HStack,
  Text,
  Flex,
  Spacer,
  Box,
  Avatar,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import CreateSurveyModel from "../createSurveyModel.tsx";
import CreatePageModel from "../createPageModel.tsx";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

import MyFeedbackForm_large from "../../images/MyFeedbackForm_large.png";
import { useNavigate, useParams } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const ResultsPageNavBar = () => {
  const navigate = useNavigate();
  const { survey_id } = useParams();
  return (
    <Box>
      <Flex>
        <HStack>
          <Box boxSize="200px">
            <Image src={MyFeedbackForm_large} alt="My feedback from" />
          </Box>
          <IconButton
            m={5}
            size="lg"
            aria-label="Delete Survey"
            icon={<IoHomeOutline />}
            onClick={() => {
              navigate("/");
            }}
          />
          <ChakraLink
            as={ReactRouterLink}
            to={`/build/${survey_id}`}
            boxShadow="xs"
            p="3"
            rounded="md"
            bg="white"
          >
            <HStack>
              <MdOutlineArrowBackIos color="gray" />
              <Text pl={5} fontSize="3xl" color="gray">
                Build Survey
              </Text>
            </HStack>
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
              <Text pl={5} fontSize="3xl">
                View Results
              </Text>
            </HStack>
          </ChakraLink>
        </HStack>
        <Spacer />

        <HStack>
          <Avatar size="lg" name="Greg McCarthy" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default ResultsPageNavBar;
