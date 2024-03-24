import {
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ListSurveys from "../components/listSurveys.tsx";
import HomeNavBar from "../components/homeNavBar.tsx";
import BuildSurveyPageNavBar from "../components/buildSurveyPageNavBar.tsx";
import SurveyPage from "../components/surveyPage.tsx";
import useQueryHook from "../hooks/useQueryHook.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios.ts";
import survey from "../components/survey.tsx";
import { useState } from "react";
import useMutationPutHook from "../hooks/useMutationPutHook.tsx";

const BuildSurvey = () => {
  const { survey_id } = useParams();
  const [editSurveyName, setEditSurveyName] = useState("");
  const updateSurvey = useMutationPutHook(`/surveys`, "getSurveyDetails");
  const getSurveyDetails = async () => {
    return await axios.get(`surveys/${survey_id}/details`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    });
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["getSurveyDetails"],
    queryFn: getSurveyDetails,
  });

  if (isError) {
    console.log(error);
    return <Text>{error.message}</Text>;
  }
  if (isLoading) {
    return <Spinner />;
  }
  const surveysDetails = data?.data;
  //console.log(surveysDetails.pages[0].questions);

  const handleNameChange = () => {
    // @ts-ignore
    updateSurvey.mutate({
      payload: { survey_name: editSurveyName },
      id: surveysDetails.survey_id,
    });
  };

  return (
    <Container maxW="1200px">
      <BuildSurveyPageNavBar />
      <Editable
        fontSize="5xl"
        m={2}
        sx={
          surveysDetails.survey_name.length === 0 && editSurveyName.length === 0
            ? { textColor: "gray" }
            : { textColor: "black" }
        }
        //value={editPageTitle}
        onChange={(e) => {
          setEditSurveyName(e);
        }}
        onSubmit={handleNameChange}
        defaultValue={surveysDetails.survey_name}
        placeholder={"Enter survey title (optional)"}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      {surveysDetails.pages.map((page: any, index: any) => {
        return (
          <SurveyPage
            key={index}
            pageTitle={page.page_title}
            pageDescription={page.page_description}
            page_id={page.page_id}
            questions={page.questions}
            survey_id={survey_id}
          />
        );
      })}
    </Container>
  );
};

export default BuildSurvey;
