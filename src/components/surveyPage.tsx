import {
  Box,
  Button,
  Card,
  HStack,
  IconButton,
  Indicator,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";
import MultipleChoiceQuestion from "./multipleChoiceQuestion.tsx";
import useMutationDeleteHook from "../hooks/useMutationDeleteHook.tsx";
import CreateQuestionModel from "./ createQuestionModel.tsx";
import AddQuestionMenu from "./addQuestionMenu.tsx";
import returnQuestionType from "../utils/returnQuestionType.tsx";

const SurveyPage = ({
  pageTitle,
  pageDescription,
  page_id,
  questions,
  surveyId,
}: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editPageTitle, setEditPageTitle] = useState("");
  const [editPageDescription, setEditPageDescription] = useState("");

  const deletePage = useMutationDeleteHook(
    `/surveys/${surveyId}/pages`,
    "getSurveyDetails",
  );

  //console.log(questions);

  const handelEditClick = (_e: any) => {
    setIsEdit(!isEdit);
    console.log("click");
  };

  const pageTitleChange = (e: any) => {
    setEditPageTitle(e.target.value);
  };

  const pageDescriptionChange = (e: any) => {
    setEditPageDescription(e.target.value);
  };

  const handelUpdatePage = () => {
    const newPageTitle = editPageTitle.length > 0 ? editPageTitle : pageTitle;
    const newPageDescription =
      editPageDescription.length > 0 ? editPageDescription : pageDescription;
    console.log(newPageTitle + newPageDescription);
  };

  const handleDeletePage = () => {
    deletePage.mutate(page_id);
  };

  const handleAddQuestion = () => {};

  return (
    <Card boxShadow="base" p={4} mt={10}>
      {!isEdit ? (
        <HStack>
          <Box onClick={handelEditClick}>
            <Text fontSize="4xl" m={2}>
              {pageTitle}
            </Text>
            <Text fontSize="1xl" m={2}>
              {pageDescription}
            </Text>
          </Box>
          <Spacer />
          <Stack>
            <Button onClick={handleDeletePage}>Delete Page</Button>
            <AddQuestionMenu page_id={page_id} />
          </Stack>
        </HStack>
      ) : (
        <Box>
          <Input
            m={2}
            placeholder={pageTitle}
            value={editPageTitle}
            onChange={pageTitleChange}
          />
          <Input
            m={2}
            placeholder={pageDescription}
            value={editPageDescription}
            onChange={pageDescriptionChange}
          />
          <HStack spacing="10px" m={2}>
            <IconButton
              aria-label="Save"
              icon={<CheckIcon />}
              onClick={handelUpdatePage}
            />
            <IconButton
              aria-label="Cancel"
              icon={<CloseIcon />}
              onClick={handelEditClick}
            />
          </HStack>
        </Box>
      )}
      {questions.map((question: any, index: number) => {
        return <Box m={4}>{returnQuestionType(index, question, true)}</Box>;
      })}
    </Card>
  );
};

export default SurveyPage;
