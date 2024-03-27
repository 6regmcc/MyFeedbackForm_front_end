//@ts-nocheck
import { Box, Text, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

const ResponsesPageCheckboxQ = ({
  question,
  existingResponse,
  addOrUpdateAnswers,
}: any) => {
  const [checkedItems, setCheckedItems] = useState([]);
  console.log(checkedItems);
  return (
    <Box>
      <Text>{question.question_text}</Text>
      <CheckboxGroup value={checkedItems}>
        <Stack>
          {question.answer_choices.map((q: any) => {
            return (
              <Checkbox
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  const tempArr = [...new Set(checkedItems)];
                  if (tempArr.indexOf(value) != -1) {
                    tempArr.splice(tempArr.indexOf(value), 1);
                    setCheckedItems(tempArr);
                  } else {
                    tempArr.push(value);
                    setCheckedItems(tempArr);
                  }
                  addOrUpdateAnswers({
                    question_type: {
                      question_type: "closed_ended",
                      question_variant: "multi_choice",
                    },
                    submitted_response: {
                      question_id: question.question_id,
                      ce_choices: tempArr,
                    },
                  });
                }}
                value={parseInt(q.ce_choice_id)}
                key={q.ce_choice_id}
              >
                {q.choice_label}
              </Checkbox>
            );
          })}
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default ResponsesPageCheckboxQ;
