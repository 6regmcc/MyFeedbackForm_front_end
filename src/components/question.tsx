import {
  Box,
  Button,
  Card,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";
import ReturnQuestionChoices from "../utils/returnQuestionChoices.tsx";
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";
import { useState } from "react";
import useMutationPutHook from "../hooks/useMutationPutHook.tsx";

const Question = ({
  index,
  questionText,
  answerChoices,
  questionPosition,
  question_type,
  question_variant,
  page_id,
  survey_id,
  question_id,
  isDisabled,
}: any) => {
  const [newChoiceLabel, setNewChoiceLoabel] = useState("");
  const deleteQuestion = useMutationDeleteHook(
    `/surveys/${survey_id}/pages/${page_id}/questions`,
    "getSurveyDetails",
  );
  const addAnswerChoice = useMutationPostHook(
    `/surveys/${survey_id}/pages/${page_id}/questions/${question_id}`,
    "getSurveyDetails",
  );

  const updateQuestion = useMutationPutHook(
    `/surveys/${survey_id}/pages/${page_id}`,
    "getSurveyDetails",
  );

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

  const handleAddChoice = () => {
    const payload =
      question_type === "closed_ended"
        ? { choice_label: "" }
        : { choice_label: "", open_ended_choice_type: "question" };
    // @ts-ignore
    addAnswerChoice.mutate({ payload, id: "choices" });
  };

  const handleDeleteQuestion = () => {
    deleteQuestion.mutate(question_id);
  };

  const handleQuestionUpdate = (updatedQuestionText: any) => {
    // @ts-ignore
    updateQuestion.mutate({
      payload: { question_text: updatedQuestionText },
      id: `questions/${question_id}`,
    });
  };

  return (
    <Card key={index}>
      <HStack sx={questionTextStyles}>
        <Text>{questionPosition}.</Text>
        <Editable
          defaultValue={` ${questionText}`}
          onSubmit={(e) => {
            handleQuestionUpdate(e);
          }}
        >
          <EditablePreview />
          <EditableInput />
        </Editable>

        <Spacer />
        <Button m={4} onClick={handleDeleteQuestion}>
          Delete Question
        </Button>
      </HStack>

      {ReturnQuestionChoices({
        question_type,
        question_variant,
        answerChoices,
        isDisabled,
        survey_id,
        page_id,
        question_id,
      })}
      <HStack m={3}>
        <Spacer />
        <Button onClick={handleAddChoice}>Add Choice</Button>
      </HStack>
    </Card>
  );
};

export default Question;
