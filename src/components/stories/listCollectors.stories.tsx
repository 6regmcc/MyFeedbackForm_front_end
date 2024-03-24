import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, OrderedList } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import { SurveyType } from "../../types/types.ts";
import * as inspector from "inspector";
import ListCollectors from "../listCollectors.tsx";

const queryClient = new QueryClient();

export default {
  component: ListCollectors,
  title: "ListCollectors",
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

const exampelCollector = {
  survey_id: 224,
  is_open: true,
  url: "HIF07GOAZ3",
  collector_id: 4,
  date_created: "2024-03-24T12:59:15.629833",
};

export const Default = () => <ListCollectors survey_id={224} />;
