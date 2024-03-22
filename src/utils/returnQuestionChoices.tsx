import CheckboxQuestion from "../components/checkboxQuestion.tsx";
import MultipleChoiceQuestion from "../components/multipleChoiceQuestion.tsx";
import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import MulitChoiceAnswerChoice from "../components/mulitChoiceAnswerChoice.tsx";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";

const answerChoiceBoxStyles: any = {
  m: 15,
};

const answerChoiceStyles: any = {
  my: 1,
  mr: 2,
  ml: 6,
};
const ReturnQuestionChoices = ({
  answerChoices,
  survey_id,
  page_id,
  question_id,
  question_type,
  question_variant,
  isDisabled,
}: any) => {
  if (
    question_type === "closed_ended" &&
    question_variant === "single_choice"
  ) {
    return (
      <RadioGroup>
        <Box sx={answerChoiceBoxStyles}>
          <Stack>
            {answerChoices.map((choice: any, index: number) => {
              return (
                <MulitChoiceAnswerChoice
                  key={index}
                  answerChoiceStyles={answerChoiceStyles}
                  choice={choice}
                  survey_id={survey_id}
                  page_id={page_id}
                  question_id={question_id}
                />
              );
            })}
          </Stack>
        </Box>
      </RadioGroup>
    );
  } else if (
    question_type === "closed_ended" &&
    question_variant === "multi_choice"
  ) {
    return;
  } else if (
    question_type === "open_ended" &&
    question_variant === "single_choice"
  ) {
    return;
  }
};

export default ReturnQuestionChoices;
