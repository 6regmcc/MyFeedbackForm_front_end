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
import CreateMultipleChoiceQuestion from "./createMultipleChoiceQuestion.tsx";

const AddQuestionMenu = ({ page_id }: any) => {
  const { survey_id } = useParams();

  const clearAndClose = () => {
    onClose();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMultipleChoiceQuestionClick = () => {
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
          <MenuItem>Checkbox</MenuItem>
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
              <CreateMultipleChoiceQuestion
                clearAndClose={clearAndClose}
                survey_id={survey_id}
                page_id={page_id}
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
