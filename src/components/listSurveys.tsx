import Survey from "./survey.tsx";
import { Container, Text, Spinner } from "@chakra-ui/react";
import { SurveyType, SurveyList } from "../types/types.ts";
import axios from "../api/axios.ts";
import { useQuery } from "@tanstack/react-query";

const SURVEY_LIST_URL = "/surveys";

/*
error to handel
sending wrong token, this needs to be handled on backend
show error: unauthroised,
show loading
 */

const ListSurveys = () => {
  const fetchSurveyList = async () => {
    return await axios.get(SURVEY_LIST_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJleHAiOjE3MTA2OTIzNzR9.QOmFZf-Iua_hBTm53HMSpJxgj7anspSc_VYcB4AJtuY`,
      },
      withCredentials: true,
    });
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["surveyList"],
    queryFn: fetchSurveyList,
  });
  console.log(isError);
  if (isError) {
    console.log(error);
    return <Text>{error.message}</Text>;
  }
  if (isLoading) {
    return <Spinner />;
  }
  const surveysList = data?.data.data as SurveyList;
  console.log(surveysList);
  return (
    <Container>
      {surveysList.map((survey: SurveyType, index: number) => {
        return (
          <Survey
            key={index}
            surveyName={survey.survey_name}
            surveyId={survey.survey_id}
          />
        );
      })}
    </Container>
  );
};

export default ListSurveys;
