import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import useMutationPostHook from "../hooks/useMutationPostHook.tsx";
import { useParams } from "react-router-dom";
import CreateMultipleChoiceQuestion from "./createMultipleChoiceQuestion.tsx";

function CreateQuestionModel({ page_id }: any) {
  const { survey_id } = useParams();

  const clearAndClose = () => {
    onClose();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Add Question</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Page</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateMultipleChoiceQuestion
              clearAndClose={clearAndClose}
              survey_id={survey_id}
              page_id={page_id}
            />
          </ModalBody>
          <ModalFooter>
            <Button m={1}>Save</Button>
            <Button m={1} onClick={clearAndClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateQuestionModel;
