import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios.ts";
import useMutationHook from "../hooks/useMutationPostHook.tsx";
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";

const CREATE_SURVEY_URL = "/";
const CreateSurvey = () => {
  const [surveyName, setSurveyName] = useState("");

  const createSurvey = useMutationPostHook(CREATE_SURVEY_URL, "surveyList");

  const handleClick = (e: any) => {
    e.preventDefault;

    //createSurvey.mutate({ survey_name: surveyName });
    // @ts-ignore
    createSurvey.mutate({
      payload: { survey_name: surveyName },
      id: "surveys",
    });
    setSurveyName("");
  };
  return (
    <FormControl>
      <FormLabel>Enter survey name</FormLabel>
      <Input
        value={surveyName}
        placeholder="Survey name"
        onChange={(e) => setSurveyName(e.target.value)}
      />
      <Button onClick={handleClick}>Create Survey</Button>
    </FormControl>
  );
};

export default CreateSurvey;
