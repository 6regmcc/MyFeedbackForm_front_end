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

function CreateSurveyModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [surveyName, setSurveyName] = useState("");

  return (
    <>
      <Button onClick={onOpen}>Create Survey</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                value={surveyName}
                placeholder="Survey name"
                onChange={(e) => setSurveyName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button>Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateSurveyModel;
