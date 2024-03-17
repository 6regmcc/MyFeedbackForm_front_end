import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import Survey from "../survey.tsx";
import { BrowserRouter } from "react-router-dom";
import { SurveyType } from "../../types/types.ts";
import * as inspector from "inspector";

const queryClient = new QueryClient();

export default {
  component: Survey,
  title: "Survey",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>{Story()}</ChakraProvider>
        </QueryClientProvider>
      </BrowserRouter>
    ),
  ],
};

const exampleSurvey: SurveyType = {
  survey_name: "Test Survey",
  date_created: "2024-02-25T20:14:29.043622",
  date_modified: "2024-02-25T20:14:29.043626",
  survey_id: 11,
};
export const Default = {
  args: {
    survey_name: exampleSurvey.survey_name,
  },
};
