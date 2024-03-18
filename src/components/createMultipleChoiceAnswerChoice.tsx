import { useState } from "react";
import { FormControl, HStack, Input, Radio } from "@chakra-ui/react";

const CreateMultipleChoiceAnswerChoice = ({
  index,
  choiceLabel,
  handleUpdateAnswerChoiceLabels,
}: any) => {
  return (
    <FormControl>
      <HStack>
        <Radio disabled={true}></Radio>
        <Input
          value={choiceLabel}
          onChange={(e) => {
            handleUpdateAnswerChoiceLabels(index, {
              choice_label: e.target.value,
            });
          }}
        />
      </HStack>
    </FormControl>
  );
};

export default CreateMultipleChoiceAnswerChoice;
