import {
  Radio,
  RadioGroup,
  Stack,
  Box,
  Text,
  useRadio,
} from "@chakra-ui/react";
import Register from "../register.tsx";
import { useState } from "react";
import { useRadioGroup } from "@chakra-ui/react";

const responsesPageMultiChoiceQ = ({
  question,
  existingResponse,
  addOrUpdateAnswers,
}: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const [value, setValue] = useState();
  const [radioValue, setRadioValue] = useState();

  return (
    <Box>
      <Text>{question.question_text}</Text>
      <RadioGroup
        onChange={(e) => {
          // @ts-ignore
          setRadioValue(e);
          console.log(e);
          addOrUpdateAnswers({
            question_type: {
              question_type: "closed_ended",
              question_variant: "single_choice",
            },
            submitted_response: {
              question_id: question.question_id,
              ce_choice_id: parseInt(e),
            },
          });
        }}
        value={radioValue}
        defaultValue={{ existingResponse } ? String(existingResponse) : ""}
      >
        <Stack>
          {question.answer_choices.map((question: any) => {
            return (
              <Radio
                key={question.ce_choice_id}
                value={String(question.ce_choice_id)}
              >
                {question.choice_label}
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default responsesPageMultiChoiceQ;
