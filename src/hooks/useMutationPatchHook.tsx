import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "../api/axios.ts";

const useMutationPatchHook = (
  url: string,
  query: string,
  callback?: Function,
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    // @ts-ignore
    mutationFn: ({ payload, id }) => {
      return axios.patch(`${url}/${id}`, JSON.stringify(payload), {
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

export default useMutationPatchHook;
