import {
  Box,
  Button,
  Card,
  HStack,
  IconButton,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";
import ReturnQuestionChoices from "../utils/returnQuestionChoices.tsx";

const Question = ({
  index,
  questionText,
  answerChoices,
  questionPosition,
  question_type,
  question_variant,
  page_id,
  survey_id,
  question_id,
  isDisabled,
}: any) => {
  const deleteQuestion = useMutationDeleteHook(
    `/surveys/${survey_id}/pages/${page_id}/questions`,
    "getSurveyDetails",
  );
  const questionTextStyles: any = {
    fontSize: "2xl",
    ml: 6,
    mt: 5,
  };

  const answerChoiceBoxStyles: any = {
    m: 15,
  };

  const answerChoiceStyles: any = {
    my: 1,
    mr: 2,
    ml: 6,
  };

  const answerChoiceTextStyles: any = {
    fontSize: "lg",
  };

  const handleDeleteQuestion = () => {
    deleteQuestion.mutate(question_id);
  };

  return (
    <Card key={index}>
      <HStack>
        <Text sx={questionTextStyles}>
          {questionPosition}. {questionText}
        </Text>
        <Spacer />
        <IconButton
          aria-label="Delete Question"
          icon={<DeleteIcon />}
          onClick={handleDeleteQuestion}
        />
      </HStack>

      {ReturnQuestionChoices({
        question_type,
        question_variant,
        answerChoices,
        isDisabled,
        survey_id,
        page_id,
        question_id,
      })}
    </Card>
  );
};

export default Question;
