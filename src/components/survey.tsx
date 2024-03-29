import {
  Card,
  CardBody,
  HStack,
  Text,
  IconButton,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const DELETE_SURVEY_URL = "/surveys";

const Survey = ({ surveyName, surveyId }: any) => {
  const deleteSurvey = useMutationDeleteHook(DELETE_SURVEY_URL, "surveyList");
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    deleteSurvey.mutate(surveyId);
  };

  return (
    <Card m={4}>
      <CardBody>
        <Flex>
          <Center>
            <ChakraLink as={ReactRouterLink} to={`/build/${surveyId}`}>
              <Text fontSize="lg">{surveyName} </Text>
            </ChakraLink>
          </Center>

          <Spacer />
          <HStack spacing="10px">
            <IconButton
              aria-label="Edit Survey"
              icon={<EditIcon />}
              onClick={() => {
                navigate(`/build/${surveyId}`);
              }}
            />
            <IconButton
              aria-label="Analyse Survey"
              icon={<HiOutlineChartSquareBar />}
              onClick={() => {
                navigate(`/survey_results/${surveyId}`);
              }}
            />
            <IconButton
              aria-label="Delete Survey"
              icon={<DeleteIcon />}
              onClick={handleClick}
            />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};
export default Survey;
