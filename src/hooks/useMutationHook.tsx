import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "../api/axios.ts";

const useMutationPostHook = (
  url: string,
  query: string,
  callback?: Function,
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    // @ts-ignore
    mutationFn: (newSurvey) => {
      return axios.post(url, JSON.stringify(newSurvey), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },

        withCredentials: true,
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [query] });
      if (callback) {
        callback();
      }
    },
  });
  return mutation;
};

export default useMutationPostHook;
