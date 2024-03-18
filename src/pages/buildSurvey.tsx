import { Container, Spinner, Text } from "@chakra-ui/react";
import ListSurveys from "../components/listSurveys.tsx";
import HomeNavBar from "../components/homeNavBar.tsx";
import BuildSurveyPageNavBar from "../components/buildSurveyPageNavBar.tsx";
import SurveyPage from "../components/surveyPage.tsx";
import useQueryHook from "../hooks/useQueryHook.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios.ts";
import survey from "../components/survey.tsx";

const BuildSurvey = () => {
  const { survey_id } = useParams();
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
  console.log(isError);
  if (isError) {
    console.log(error);
    return <Text>{error.message}</Text>;
  }
  if (isLoading) {
    return <Spinner />;
  }
  const surveysDetails = data?.data;
  //console.log(surveysDetails.pages[0].questions);

  return (
    <Container maxW="1200px">
      <BuildSurveyPageNavBar />
      {surveysDetails.pages.map((page: any, index: any) => {
        return (
          <SurveyPage
            key={index}
            pageTitle={page.page_title}
            pageDescription={page.page_description}
            page_id={page.page_id}
            questions={page.questions}
          />
        );
      })}
    </Container>
  );
};

export default BuildSurvey;
