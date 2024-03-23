import CheckboxQuestion from "../components/checkboxQuestion.tsx";
import MultipleChoiceQuestion from "../components/multipleChoiceQuestion.tsx";
import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import MulitChoiceAnswerChoice from "../components/mulitChoiceAnswerChoice.tsx";

import useMutationPatchHook from "../hooks/useMutationPutHook.tsx";
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
  const updateChoice = useMutationPatchHook(
    `/surveys/${survey_id}/pages/${page_id}/questions
`,
    "getSurveyDetails",
  );

  const handleChoiceUpdate = (
    choiceLabel: string,
    question_id: number,
    choice_id: number,
  ) => {
    // @ts-ignore
    updateChoice.mutate({
      payload: { choice_label: choiceLabel },
      id: `${question_id}/choices/${choice_id}/update_choice`,
    });
  };
  const deleteChoice = useMutationDeleteHook(
    `/surveys/${survey_id}/pages/${page_id}`,
    "getSurveyDetails",
  );

  const handleChoiceDelete = (question_id: number, choice_id: number) => {
    // @ts-ignore
    deleteChoice.mutate(`questions/${question_id}/choices/${choice_id}`);
  };

  if (
    question_type === "closed_ended" &&
    question_variant === "single_choice"
  ) {
    return (
      <RadioGroup>
        <Box sx={answerChoiceBoxStyles}>
          <Stack>
            {answerChoices.map((choice: any) => {
              return (
                <MulitChoiceAnswerChoice
                  key={choice.ce_choice_id}
                  answerChoiceStyles={answerChoiceStyles}
                  choice={choice}
                  survey_id={survey_id}
                  page_id={page_id}
                  question_id={question_id}
                  handleChoiceUpdate={handleChoiceUpdate}
                  handleChoiceDelete={handleChoiceDelete}
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
