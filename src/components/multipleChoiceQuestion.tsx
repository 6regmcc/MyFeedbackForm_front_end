import { Box, Card, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const MultipleChoiceQuestion = ({
  questionText,
  answerChoices,
  questionPosition,
}: any) => {
  const questionTextStyles: any = {
    fontSize: "2xl",
    ml: 6,
    mt: 5,
  };

  const answerChoiceBoxStyles: any = {
    m: 15,
  };

  const answerChoiceStyles: any = {
    my: 1,
    mr: 2,
    ml: 6,
  };

  const answerChoiceTextStyles: any = {
    fontSize: "lg",
  };

  return (
    <Card>
      <Text sx={questionTextStyles}>
        {questionPosition}. {questionText}
      </Text>
      <RadioGroup>
        <Box sx={answerChoiceBoxStyles}>
          <Stack>
            {answerChoices.map((choice: any, index: number) => {
              return (
                <Radio
                  sx={answerChoiceStyles}
                  key={index}
                  value={choice.ce_choice_id}
                >
                  <Text fontSize="lg">{choice.choice_label}</Text>
                </Radio>
              );
            })}
          </Stack>
        </Box>
      </RadioGroup>
    </Card>
  );
};

export default MultipleChoiceQuestion;
