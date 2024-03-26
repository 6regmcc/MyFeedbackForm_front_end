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
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from "uuid";

const SurveyResponsesPage = () => {
  const [page, setPage] = useState(0);
  const { collector_url } = useParams();
  //const[(cookies, setCookie, removeCookie)] = useCookies(["test_id"]);

  if (!Cookies.get("session_id")) {
    Cookies.set("session_id", uuidv4());
  }
  // @ts-ignore
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
      // @ts-ignore
      keepPreviousData: true,
    });
  const createResponse = useMutationPostHook(
    `/responses/${collector_url}`,
    `responses${page}`,
  );

  const [answers, setAnswers] = useState([]);
  console.log(answers);

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

  /*
  const addOrUpdateAnswers = (answer: any) => {
    setAnswers((ans) => {
      return ans.filter(
        (a) =>
          a.submitted_response.question_id !=
          a.submitted_response.question_id.push(["test"]),
      );
    });
  };
  */
  /*
  setAnswers((answers444) => {
      const filteredAnswers = answers444.filter(
        () =>
          answers444.
      );
      filteredAnswers.push(answer);
      console.log(answers444);
      return filteredAnswers;
    });
   */

  const addOrUpdateResponse = (newResponse: any) => {
    // @ts-ignore
    const filterArr = responses.filter(
      (response) => response.question_id != newResponse.question_id,
    );
    filterArr.push(newResponse);
    responses = filterArr;
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
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || page + 1 === data?.data.total_pages}
        >
          Next Page
        </Button>
      </HStack>{" "}
      {isFetching ? <span> Loading...</span> : null}{" "}
    </Container>
  );
};

export default SurveyResponsesPage;
