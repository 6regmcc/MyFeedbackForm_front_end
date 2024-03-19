import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CreateQuestionModel from "./ createQuestionModel.tsx";
import { useParams } from "react-router-dom";
import CreateMultipleChoiceQuestion from "./createQuestion.tsx";
import CreateQuestion from "./createQuestion.tsx";
import { useState } from "react";

const AddQuestionMenu = ({ page_id }: any) => {
  const { survey_id } = useParams();
  const [questionType, setQuestionType] = useState({});

  const clearAndClose = () => {
    onClose();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMultipleChoiceQuestionClick = () => {
    setQuestionType({
      question_type: "closed_ended",
      question_variant: "single_choice",
    });
    onOpen();
  };

  const handleCheckboxQuestionClick = () => {
    setQuestionType({
      question_type: "closed_ended",
      question_variant: "multi_choice",
    });
    onOpen();
  };

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Add Question
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleMultipleChoiceQuestionClick}>
            Multiple Choice
          </MenuItem>
          <MenuItem onClick={handleCheckboxQuestionClick}>Checkbox</MenuItem>
          <MenuItem>Text</MenuItem>
        </MenuList>
      </Menu>
      <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={"4xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Question</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CreateQuestion
                clearAndClose={clearAndClose}
                survey_id={survey_id}
                page_id={page_id}
                questionType={questionType}
              />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default AddQuestionMenu;
