import {
  Box,
  Checkbox,
  FormControl,
  HStack,
  IconButton,
  Input,
  Radio,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const CreateCheckboxAnswerChoices = ({
  index,
  choiceLabel,
  handleUpdateAnswerChoiceLabels,
  deleteChoice,
}: any) => {
  return (
    <Box>
      <FormControl>
        <HStack m={3}>
          <Checkbox disabled={true}></Checkbox>
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

export default CreateCheckboxAnswerChoices;
