import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const ResponsesPageSingleTextboxQ = ({
  question,
  existingResponse,
  addOrUpdateAnswers,
}: any) => {
  const [value, setValue] = useState("");
  return (
    <Box>
      <Text>{question.question_text}</Text>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
          addOrUpdateAnswers({
            question_type: {
              question_type: "open_ended",
              question_variant: "single_choice",
            },
            submitted_response: {
              question_id: question.question_id,
              ce_choices: tempArr,
            },
          });
        }}
        value={value}
      ></Input>
    </Box>
  );
};

export default ResponsesPageSingleTextboxQ;
