//@ts-nocheck
import { Box, Button, Container, HStack, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios.ts";
import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import ResponsePageListQuestions from "../components/responsesPageComponents/responsePageListQuestions.tsx";
import useMutationPostHook from "../hooks/useMutationPostHook.tsx";
import Cookies from "js-cookie";

import { v4 as uuidv4 } from "uuid";

const SurveyResponsesPage = () => {
  const [page, setPage] = useState(0);
  const { collector_url } = useParams();
  const createOrUpdateResponse = useMutationPostHook(
    `/responses/${collector_url}/create_response/questions`,
    `responses${page}`,
  );

  if (!Cookies.get("session__id")) {
    Cookies.set("session__id", uuidv4());
  }

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: [`responses${page}`],
      queryFn: () => {
        return axios.get(`/responses/${collector_url}/${page + 1}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        });
      },

      keepPreviousData: true,
    });

  const [answers, setAnswers] = useState([]);

  const addOrUpdateAnswers = (answer) => {
    const filteredArr = answers.filter((a) => {
      return (
        a?.submitted_response?.question_id !=
        answer?.submitted_response.question_id
      );
    });
    filteredArr.push(answer);
    setAnswers(filteredArr);
  };

  const handleSubmitResponse = () => {
    const current_session_id = Cookies.get("session__id");
    const response = {
      session_id: current_session_id,
      answers: answers,
    };
    createOrUpdateResponse.mutate({ payload: response, id: page + 1 });
  };

  return (
    <Container mt={20} maxW="1200px">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <Box mt={5} ml={5}>
          <Text fontSize="5xl">{data?.data.survey_name}</Text>
          <Text></Text>
          <Box id="questions">
            <ResponsePageListQuestions
              questions={data?.data.questions}
              addOrUpdateAnswers={addOrUpdateAnswers}
            />
          </Box>
        </Box>
      )}
      <Text>Current Page: {page + 1}</Text>
      <HStack>
        <Button
          ml={20}
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </Button>
        <Spacer />
        <Button
          mr={20}
          onClick={() => {
            if (!isPreviousData && page + 1 != data?.data.total_pages) {
              setPage((old) => old + 1);
            }
            handleSubmitResponse();
          }}
        >
          Next Page
        </Button>
      </HStack>{" "}
      {isFetching ? <span> Loading...</span> : null}{" "}
    </Container>
  );
};

export default SurveyResponsesPage;
