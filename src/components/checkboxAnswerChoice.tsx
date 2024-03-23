import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

const CheckboxAnswerChoice = ({
  answerChoiceStyles,
  choice,

  question_id,
  handleChoiceUpdate,
  handleChoiceDelete,
}: any) => {
  const [choiceLabel, setChoiceLabel] = useState("");

  return (
    <Box id="choiceBox">
      <HStack>
        <Checkbox
          sx={answerChoiceStyles}
          value={choice.ce_choice_id}
        ></Checkbox>

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
            <EditablePreview width="full" />
            <Input as={EditableInput} />
            <Spacer />
          </HStack>
        </Editable>

        <Spacer />

        <IconButton
          aria-label="Delete Choice"
          icon={<DeleteIcon />}
          onClick={() => {
            handleChoiceDelete(question_id, choice.ce_choice_id);
          }}
        />
      </HStack>
    </Box>
  );
};

export default CheckboxAnswerChoice;
