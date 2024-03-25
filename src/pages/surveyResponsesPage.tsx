import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios.ts";
import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const SurveyResponsesPage = () => {
  const [page, setPage] = useState(0);

  // const fetchProjects = (page = 0) => fetch('/api/projects?page=' + page).then((res) => res.json())
  const { collector_url } = useParams();
  // @ts-ignore
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["responses", page],
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

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <Text>{data.data.page_title}</Text>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData && page + 1 != data?.data.total_pages) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || page + 1 === data?.data.total_pages}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};

export default SurveyResponsesPage;
