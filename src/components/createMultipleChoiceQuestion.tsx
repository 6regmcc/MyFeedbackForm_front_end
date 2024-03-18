import {
  Box,
  Button,
  Card,
  FormControl,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import CreateMultipleChoiceAnswerChoice from "./stories/createMultipleChoiceAnswerChoice.tsx";

const CreateMultipleChoiceQuestion = () => {
  const [answerChoiceLabels, setAnswerChoiceLabels] = useState([]);

  const [questionText, setQuestionText] = useState("");

  const handleAddChoiceClick = () => {
    const currentAnswerChoiceLabels = [...answerChoiceLabels];
    // @ts-ignore
    currentAnswerChoiceLabels.push({ choice_label: "" });
    setAnswerChoiceLabels(currentAnswerChoiceLabels);
  };

  const handleUpdateAnswerChoiceLabels = (index: number, choiceLabel: {}) => {
    const currentChoiceLabels = [...answerChoiceLabels];
    currentChoiceLabels[index] = choiceLabel;
    setAnswerChoiceLabels(currentChoiceLabels);
  };

  const handleSaveQuestionClick = () => {
    console.log(questionText);
    console.log(answerChoiceLabels);
  };

  return (
    <Card>
      <FormControl>
        <Input
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </FormControl>

      <RadioGroup>
        <Box>
          <Stack>
            {answerChoiceLabels.map((choice, index) => {
              return (
                <CreateMultipleChoiceAnswerChoice
                  key={index}
                  index={index}
                  handleUpdateAnswerChoiceLabels={
                    handleUpdateAnswerChoiceLabels
                  }
                />
              );
            })}
          </Stack>
        </Box>
      </RadioGroup>

      <Button
        onClick={() => {
          handleAddChoiceClick();
        }}
      >
        Add choice
      </Button>
      <Button onClick={handleSaveQuestionClick}>Save question</Button>
    </Card>
  );
};

export default CreateMultipleChoiceQuestion;
