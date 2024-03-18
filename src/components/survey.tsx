import {
  Card,
  CardBody,
  HStack,
  Text,
  IconButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";
import { useNavigate } from "react-router-dom";

const DELETE_SURVEY_URL = "/surveys";

const Survey = ({ surveyName, surveyId }: any) => {
  const deleteSurvey = useMutationDeleteHook(DELETE_SURVEY_URL, "surveyList");
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    deleteSurvey.mutate(surveyId);
  };

  return (
    <Card my={4}>
      <CardBody>
        <Flex>
          <Text>{surveyName} </Text>
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
