import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios.ts";

const useQueryHook = (url: string, query: string) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["getSurveyCollectors"],
    queryFn: async () => {
      return await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });
    },
  });
  return { isLoading, isError, data, error };
};

export default useQueryHook;
