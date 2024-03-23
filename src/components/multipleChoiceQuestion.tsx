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

const MultipleChoiceQuestion = ({
  questionText,
  answerChoices,
  questionPosition,
  page_id,
  survey_id,
  question_id,
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
    <Card>
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

      <RadioGroup>
        <Box sx={answerChoiceBoxStyles}>
          <Stack>
            {answerChoices.map((choice: any, index: number) => {
              return (
                <Radio
                  sx={answerChoiceStyles}
                  key={index}
                  value={choice.ce_choice_id}
                >
                  <Text fontSize="lg">{choice.choice_label}</Text>
                </Radio>
              );
            })}
          </Stack>
        </Box>
      </RadioGroup>
    </Card>
  );
};

export default MultipleChoiceQuestion;
