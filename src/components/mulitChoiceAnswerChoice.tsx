import {
  Box,
  HStack,
  IconButton,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
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
  handleChoiceUpdate,
}: any) => {
  const [choiceLabel, setChoiceLabel] = useState("");

  const deleteAnswerChoice = useMutationDeleteHook(
    `/surveys/${survey_id}/pages/${page_id}/questions/${question_id}/choices`,
    "getSurveyDetails",
  );

  const handleDeleteChoice = () => {
    deleteAnswerChoice.mutate(choice.ce_choice_id);
  };

  return (
    <HStack>
      <Radio sx={answerChoiceStyles} value={choice.ce_choice_id}></Radio>
      <Editable
        defaultValue={choice.choice_label}
        onChange={(e) => {
          setChoiceLabel(e);
        }}
        onSubmit={(e) => {
          console.log(choiceLabel);
          handleChoiceUpdate(e, question_id, choice.ce_choice_id);
        }}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
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
