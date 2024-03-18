import {
  Box,
  Button,
  Card,
  FormControl,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import CreateMultipleChoiceAnswerChoice from "./createMultipleChoiceAnswerChoice.tsx";

const CreateMultipleChoiceQuestion = () => {
  const [answerChoiceLabels, setAnswerChoiceLabels] = useState([]);

  const [questionText, setQuestionText] = useState("");

  const handleAddChoiceClick = () => {
    const currentAnswerChoiceLabels = [...answerChoiceLabels];
    // @ts-ignore
    currentAnswerChoiceLabels.push({ choice_label: "" });
    setAnswerChoiceLabels(currentAnswerChoiceLabels);
    //console.log(currentAnswerChoiceLabels);
  };

  const handleUpdateAnswerChoiceLabels = (index: number, choiceLabel: {}) => {
    const currentChoiceLabels = [...answerChoiceLabels];
    // @ts-ignore
    currentChoiceLabels[index] = choiceLabel;
    setAnswerChoiceLabels(currentChoiceLabels);
  };

  const handelRemoveAnswerChoice = (index: any) => {
    const currentChoiceLabels = [...answerChoiceLabels];

    currentChoiceLabels.splice(index, 1);
    console.log(currentChoiceLabels);
    setAnswerChoiceLabels(currentChoiceLabels);
  };

  const handleSaveQuestionClick = () => {
    console.log(questionText);
    console.log(answerChoiceLabels);
  };

  const questionTextStyles: any = {
    fontSize: "2xl",
    ml: 6,
    mt: 5,
  };

  return (
    <Card>
      <FormControl p={5}>
        <HStack>
          <Input
            placeholder={"Question text"}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </HStack>
      </FormControl>

      <RadioGroup>
        <Box>
          <Stack>
            {answerChoiceLabels.map((_choice, index) => {
              return (
                <CreateMultipleChoiceAnswerChoice
                  // @ts-ignore
                  choiceLabel={_choice.choice_label}
                  key={index}
                  index={index}
                  deleteChoice={handelRemoveAnswerChoice}
                  handleUpdateAnswerChoiceLabels={
                    handleUpdateAnswerChoiceLabels
                  }
                />
              );
            })}
          </Stack>
        </Box>
      </RadioGroup>
      <HStack>
        <Spacer />
        <Button m={5} onClick={handleAddChoiceClick}>
          Add choice
        </Button>
        <Button m={5} onClick={handleSaveQuestionClick}>
          Save question
        </Button>
        <Button m={5}>Cancel</Button>
      </HStack>
    </Card>
  );
};

export default CreateMultipleChoiceQuestion;
