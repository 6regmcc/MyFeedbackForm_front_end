import {
  Box,
  Button,
  Card,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";

import AddQuestionMenu from "./createQuestionComponents/addQuestionMenu.tsx";

import Question from "./question.tsx";
import UseMutationPutHook from "../hooks/useMutationPutHook.tsx";

const SurveyPage = ({
  pageTitle,
  pageDescription,
  page_id,
  questions,
  survey_id,
}: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editPageTitle, setEditPageTitle] = useState("");
  const [editPageDescription, setEditPageDescription] = useState("");

  const deletePage = useMutationDeleteHook(
    `/surveys/${survey_id}/pages`,
    "getSurveyDetails",
  );

  const updatePage = UseMutationPutHook(
    `/surveys/${survey_id}/pages`,
    "getSurveyDetails",
  );

  //console.log(questions);

  const handelUpdatePage = () => {
    const newPageTitle = editPageTitle.length > 0 ? editPageTitle : pageTitle;
    const newPageDescription =
      editPageDescription.length > 0 ? editPageDescription : pageDescription;
    // @ts-ignore
    updatePage.mutate({
      payload: {
        page_title: newPageTitle,
        page_description: newPageDescription,
      },
      id: page_id,
    });
  };
  const handleTitleChange = () => {
    // @ts-ignore
    updatePage.mutate({
      payload: { page_title: editPageTitle, page_description: pageDescription },
      id: page_id,
    });
  };

  const handleDescriptionChange = () => {
    // @ts-ignore
    updatePage.mutate({
      payload: { page_title: pageTitle, page_description: editPageDescription },
      id: page_id,
    });
  };

  const handleDeletePage = () => {
    deletePage.mutate(page_id);
  };

  return (
    <Box my="75">
      <Card boxShadow="base" p={4} mt={10}>
        <HStack>
          <Stack>
            <Editable
              fontSize="3xl"
              m={2}
              sx={
                pageTitle.length === 0 && editPageTitle.length === 0
                  ? { textColor: "gray" }
                  : { textColor: "black" }
              }
              //value={editPageTitle}
              onChange={(e) => {
                setEditPageTitle(e);
              }}
              onSubmit={handleTitleChange}
              defaultValue={pageTitle}
              placeholder={"Enter page title (optional)"}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Editable
              sx={
                pageDescription.length === 0 && editPageDescription.length === 0
                  ? { textColor: "gray" }
                  : { textColor: "black" }
              }
              fontSize="1xl"
              m={2}
              //value={editPageDescription}
              onChange={(e) => {
                setEditPageDescription(e);
              }}
              onSubmit={handleDescriptionChange}
              defaultValue={pageDescription}
              placeholder={"Enter page description (optional)"}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Stack>

          <Spacer />
          <Stack>
            <Button onClick={handleDeletePage}>Delete Page</Button>
            <AddQuestionMenu page_id={page_id} />
          </Stack>
        </HStack>

        {questions.map((question: any) => {
          return (
            <Box key={`${question.question_id}${question.question_text}`} m={4}>
              <Question
                questionText={question.question_text}
                answerChoices={question.answer_choices}
                question_type={question.question_type}
                question_variant={question.question_variant}
                questionPosition={question.question_position}
                survey_id={survey_id}
                page_id={page_id}
                question_id={question.question_id}
                isDisabled={true}
              />
            </Box>
          );
        })}
      </Card>
    </Box>
  );
};

export default SurveyPage;
