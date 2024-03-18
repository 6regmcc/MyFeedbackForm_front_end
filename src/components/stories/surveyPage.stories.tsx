import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";

import SurveyPage from "../surveyPage.tsx";

const queryClient = new QueryClient();

export default {
  component: SurveyPage,
  title: "SurveyPage",
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

export const Default = () => (
  <SurveyPage
    pageTitle={"Original Page Title"}
    pageDescription={"Original Page Description"}
  />
);
