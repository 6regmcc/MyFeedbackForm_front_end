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
  useEditableControls,
  Input,
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
  handleDeleteChoice,
}: any) => {
  const [choiceLabel, setChoiceLabel] = useState("");

  const deleteAnswerChoice = useMutationDeleteHook(
    `/surveys/${survey_id}/pages/${page_id}/questions/${question_id}/choices`,
    "getSurveyDetails",
  );

  return (
    <Box id="choiceBox">
      <HStack>
        <Radio sx={answerChoiceStyles} value={choice.ce_choice_id}></Radio>

        <Editable
          width="100%"
          defaultValue={choice.choice_label}
          onChange={(e) => {
            setChoiceLabel(e);
          }}
          onSubmit={(e) => {
            console.log(choiceLabel);
            handleChoiceUpdate(e, question_id, choice.ce_choice_id);
          }}
        >
          <HStack>
            <EditablePreview />
            <Input as={EditableInput} />
            <Spacer />
            <IconButton
              aria-label="Delete Choice"
              icon={<DeleteIcon />}
              onClick={() => {
                console.log("delete button clicked");
                handleDeleteChoice(question_id, choice.ce_choice_id);
              }}
            />
          </HStack>
        </Editable>

        <Spacer />
      </HStack>
    </Box>
  );
};

export default MultiChoiceAnswerChoice;
