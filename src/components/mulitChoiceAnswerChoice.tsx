import {
  Box,
  HStack,
  IconButton,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";

const MultiChoiceAnswerChoice = ({
  answerChoiceStyles,
  choice,
  survey_id,
  page_id,
  question_id,
}: any) => {
  const [isEdit, setIsEdit] = useState(false);

  const deleteAnswerChoice = useMutationDeleteHook(
    `/surveys/${survey_id}/pages/${page_id}/questions/${question_id}/choices`,
    "getSurveyDetails",
  );

  const handleDeleteChoice = () => {
    deleteAnswerChoice.mutate(choice.ce_choice_id);
  };
  const handelEditClick = (_e: any) => {
    setIsEdit(!isEdit);
    console.log("click");
  };
  return (
    <HStack>
      <Radio sx={answerChoiceStyles} value={choice.ce_choice_id}>
        <Text fontSize="xl">{choice.choice_label}</Text>
      </Radio>
      <Spacer />
      <IconButton
        aria-label="Delete Choic"
        icon={<DeleteIcon />}
        onClick={handleDeleteChoice}
      />
    </HStack>
  );
};

export default MultiChoiceAnswerChoice;
