import {
  Box,
  Card,
  HStack,
  IconButton,
  Indicator,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";

const SurveyPage = ({ pageTitle, pageDescription, page_id }: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editPageTitle, setEditPageTitle] = useState("");
  const [editPageDescription, setEditPageDescription] = useState("");

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

  return (
    <Card boxShadow="base" p={4} mt={10}>
      {!isEdit ? (
        <Box onClick={handelEditClick}>
          <Text fontSize="4xl" m={2}>
            {pageTitle}
          </Text>
          <Text fontSize="1xl" m={2}>
            {pageDescription}
          </Text>
        </Box>
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
              aria-label="Edit Survey"
              icon={<CheckIcon />}
              onClick={handelUpdatePage}
            />
            <IconButton
              aria-label="Delete Survey"
              icon={<CloseIcon />}
              onClick={handelEditClick}
            />
          </HStack>
        </Box>
      )}
    </Card>
  );
};

export default SurveyPage;
