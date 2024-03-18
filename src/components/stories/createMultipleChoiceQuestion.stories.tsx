import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import { SurveyType } from "../../types/types.ts";
import * as inspector from "inspector";
import CreateMultipleChoiceQuestion from "../createMultipleChoiceQuestion.tsx";

const queryClient = new QueryClient();

export default {
  component: CreateMultipleChoiceQuestion,
  title: "CreateMultipleChoiceQuestion",
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

export const Default = () => <CreateMultipleChoiceQuestion />;
