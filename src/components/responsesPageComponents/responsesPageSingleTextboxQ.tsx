//@ts-nocheck
import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const ResponsesPageSingleTextboxQ = ({
  question,
  existingResponse,
  addOrUpdateAnswers,
}: any) => {
  const questionTextStyles: any = {
    fontSize: "2xl",
    ml: 6,
    mt: 5,
  };

  const answerChoiceStyles: any = {
    my: 1,
    ml: 5,
  };

  const answerChoiceBoxStyles: any = {
    m: 5,
  };
  const [value, setValue] = useState("");
  return (
    <Box>
      <Text
        sx={questionTextStyles}
      >{`${question.question_position}. ${question.question_text}`}</Text>
      <Box sx={answerChoiceBoxStyles}>
        <Input
          sx={answerChoiceStyles}
          onChange={(e) => {
            setValue(e.target.value);
            addOrUpdateAnswers({
              question_type: {
                question_type: "open_ended",
                question_variant: "single_choice",
              },
              submitted_response: {
                question_id: question.question_id,
                oe_choice_id: question.answer_choices[0].oe_choice_id,
                answer_text: e.target.value,
              },
            });
          }}
          value={value}
        ></Input>
      </Box>
    </Box>
  );
};

export default ResponsesPageSingleTextboxQ;
