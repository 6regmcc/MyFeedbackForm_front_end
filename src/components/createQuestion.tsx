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
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";
import _ from "lodash";
import CreateCheckboxAnswerChoices from "./createCheckboxAnswerChoices.tsx";

console.log();

const CreateQuestion = ({
  clearAndClose,
  survey_id,
  page_id,
  questionType,
}: any) => {
  const [answerChoiceLabels, setAnswerChoiceLabels] = useState([]);

  const [questionText, setQuestionText] = useState("");

  const createQuestion = useMutationPostHook(
    `/surveys/${survey_id}/pages/${page_id}`,
    "getSurveyDetails",
    () => {
      setAnswerChoiceLabels([]);
      setQuestionText("");
      clearAndClose();
    },
  );

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
    const newQuestion = {
      question_type: questionType.question_type,
      question_variant: questionType.question_variant,
      question_text: questionText,
      answer_choices:
        answerChoiceLabels.length === 0
          ? [{ open_ended_choice_type: "question", choice_label: questionText }]
          : answerChoiceLabels,
    };
    // @ts-ignore
    createQuestion.mutate({ payload: newQuestion, id: "questions" });
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
              if (
                _.isEqual(questionType, {
                  question_type: "closed_ended",
                  question_variant: "single_choice",
                })
              ) {
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
              } else if (
                _.isEqual(questionType, {
                  question_type: "closed_ended",
                  question_variant: "multi_choice",
                })
              ) {
                return (
                  <CreateCheckboxAnswerChoices
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
              } else if (
                _.isEqual(questionType, {
                  question_type: "open_ended",
                  question_variant: "single_choice",
                })
              ) {
                return <Input width="full" disabled={true}></Input>;
              }
            })}
          </Stack>
        </Box>
      </RadioGroup>
      <HStack>
        <Spacer />
        {questionType.question_type === "open_ended" &&
        questionType.question_variant === "single_choice" ? (
          <></>
        ) : (
          <Button m={5} onClick={handleAddChoiceClick}>
            Add choice
          </Button>
        )}

        <Button m={5} onClick={handleSaveQuestionClick}>
          Save question
        </Button>
        <Button
          m={5}
          onClick={() => {
            clearAndClose();
          }}
        >
          Cancel
        </Button>
      </HStack>
    </Card>
  );
};

export default CreateQuestion;
