import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, OrderedList } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";

import ResponsesPageCheckboxQ from "../responsesPageCheckboxQ.tsx";
import { useState } from "react";

const queryClient = new QueryClient();

export default {
  component: ResponsesPageCheckboxQ,
  title: "ResponsesPageCheckboxQ",
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

const question = {
  question_type: "closed_ended",
  question_variant: "multi_choice",
  question_text: "Example checkbox qusetion",
  answer_choices: [
    {
      choice_label: "one",
      ce_choice_id: 250,
      date_created: "2024-03-26T21:52:39.333748",
      date_modified: "2024-03-26T21:52:39.333752",
      choice_position: 1,
    },
    {
      choice_label: "two",
      ce_choice_id: 251,
      date_created: "2024-03-26T21:52:39.353058",
      date_modified: "2024-03-26T21:52:39.353059",
      choice_position: 2,
    },
    {
      choice_label: "three",
      ce_choice_id: 252,
      date_created: "2024-03-26T21:52:39.410816",
      date_modified: "2024-03-26T21:52:39.410820",
      choice_position: 3,
    },
    {
      choice_label: "four",
      ce_choice_id: 253,
      date_created: "2024-03-26T21:52:39.414502",
      date_modified: "2024-03-26T21:52:39.414503",
      choice_position: 4,
    },
  ],
  has_other_answer_choice: false,
  survey_id: 229,
  page_id: 259,
  question_position: 1,
  question_id: 170,
  date_created: "2024-03-26T21:52:39.250758",
  date_modified: "2024-03-26T21:52:39.250760",
};

export const Default = () => (
  <ResponsesPageCheckboxQ question={question} existingResponse={245} />
);
