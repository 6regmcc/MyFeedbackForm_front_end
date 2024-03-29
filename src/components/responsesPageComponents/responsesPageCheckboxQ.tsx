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
  const questionTextStyles: any = {
    fontSize: "2xl",
    ml: 6,
    mt: 5,
  };

  const answerChoiceStyles: any = {
    my: 1,
  };

  const answerChoiceBoxStyles: any = {
    m: 5,
  };

  return (
    <Box sx={questionTextStyles}>
      <Text>{`${question.question_position}. ${question.question_text}`}</Text>
      <Box sx={answerChoiceBoxStyles}>
        <CheckboxGroup value={checkedItems}>
          <Stack>
            {question.answer_choices.map((q: any) => {
              return (
                <Checkbox
                  sx={answerChoiceStyles}
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
    </Box>
  );
};

export default ResponsesPageCheckboxQ;
