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

function CreatePageModel() {
  const { survey_id } = useParams();

  const clearAndClose = () => {
    onClose();
    setPageDescription("");
    setPageTitle("");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const createPage = useMutationPostHook(
    `surveys/${survey_id}/pages`,
    "getSurveyDetails",
    clearAndClose,
  );

  const handleClick = (e: any) => {
    e.preventDefault;
    // @ts-ignore
    createPage.mutate({
      page_title: pageTitle,
      page_description: pageDescription,
    });
  };

  return (
    <>
      <Button onClick={onOpen}>Add Page</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Page</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Page title</FormLabel>
              <Input
                value={pageTitle}
                placeholder="Page title (Optional)"
                onChange={(e) => setPageTitle(e.target.value)}
              />
              <FormLabel>Page description (Optional)</FormLabel>
              <Input
                value={pageDescription}
                placeholder="Page description (Optional)"
                onChange={(e) => setPageDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button m={1} onClick={handleClick}>
              Save
            </Button>
            <Button m={1} onClick={clearAndClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreatePageModel;
