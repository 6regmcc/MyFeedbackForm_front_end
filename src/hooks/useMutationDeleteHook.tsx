import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios.ts";

const useMutationDeleteHook = (
  url: string,
  query: string,
  callback?: Function,
) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    // @ts-ignore
    mutationFn: (id) => {
      return axios.delete(`${url}/${id}`, {
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

export default useMutationDeleteHook;
