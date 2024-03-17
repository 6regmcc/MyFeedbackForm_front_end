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

import useMutationPostHook from "../hooks/useMutationHook.tsx";

const CREATE_SURVEY_URL = "/surveys";

function CreateSurveyModel() {
  const clearAndClose = () => {
    onClose();
    setSurveyName("");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [surveyName, setSurveyName] = useState("");
  const createSurvey = useMutationPostHook(
    CREATE_SURVEY_URL,
    "surveyList",
    clearAndClose,
  );

  const handleClick = (e: any) => {
    e.preventDefault;
    // @ts-ignore
    createSurvey.mutate({ survey_name: surveyName });
  };

  return (
    <>
      <Button onClick={onOpen}>Create Survey</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Survey</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter survey name</FormLabel>
              <Input
                value={surveyName}
                placeholder="Survey name"
                onChange={(e) => setSurveyName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button m={1} onClick={handleClick}>
              Save
            </Button>
            <Button m={1} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateSurveyModel;
