/*

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
import axios from "../api/axios.ts";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const CREATE_SURVEY_URL = "/surveys";

function CreateSurveyModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [surveyName, setSurveyName] = useState("default");
  const payload = {
    survey_name: surveyName,
  };

  const queryClient = useQueryClient();


    const mutation = useMutation({
      // @ts-ignore
      mutationFn: axios.post(CREATE_SURVEY_URL, JSON.stringify(payload), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },

        withCredentials: true,
      }),

      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["listSurveys"] });
      },
    });
    return mutation;
  };

  /*



  const createSurvey = useMutation({
    // @ts-ignore
    mutationFn: axios.post(CREATE_SURVEY_URL, JSON.stringify(payload), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      withCredentials: true,
    }),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["listSurveys"] });
    },
  });

  const mutation = createSurvey();
  const handleClick = async () => {
    // @ts-ignore

    mutation.mutate();
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


  */
