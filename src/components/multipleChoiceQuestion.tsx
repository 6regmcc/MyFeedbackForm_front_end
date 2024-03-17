import { Card, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const MultipleChoiceQuestion = ({ questionText, answerChoices }: any) => {
  return (
    <Card>
      <Text>{questionText}</Text>
      <RadioGroup defaultValue="1">
        <Stack>
          {answerChoices.map((choice: any, index: number) => {
            return (
              <Radio key={index} value={choice.ce_choice_id}>
                {choice.choice_label}
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </Card>
  );
};

export default MultipleChoiceQuestion;
