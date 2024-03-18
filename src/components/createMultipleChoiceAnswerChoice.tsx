import { useState } from "react";
import {
  Box,
  FormControl,
  HStack,
  IconButton,
  Input,
  Radio,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const answerChoiceBoxStyles: any = {
  m: 15,
};

const CreateMultipleChoiceAnswerChoice = ({
  index,
  choiceLabel,
  handleUpdateAnswerChoiceLabels,
  deleteChoice,
}: any) => {
  return (
    <Box>
      <FormControl>
        <HStack m={3}>
          <Radio disabled={true}></Radio>
          <Input
            value={choiceLabel}
            onChange={(e) => {
              handleUpdateAnswerChoiceLabels(index, {
                choice_label: e.target.value,
              });
            }}
          />
          <IconButton
            aria-label="Delete Survey"
            icon={<DeleteIcon />}
            onClick={() => {
              deleteChoice(index);
            }}
          />
        </HStack>
      </FormControl>
    </Box>
  );
};

export default CreateMultipleChoiceAnswerChoice;
