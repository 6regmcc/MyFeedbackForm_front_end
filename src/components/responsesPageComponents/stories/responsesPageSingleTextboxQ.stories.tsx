import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, OrderedList } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";

import ResponsesPageSingleTextboxQ from "../responsesPageSingleTextboxQ.tsx";
import { useState } from "react";

const queryClient = new QueryClient();

export default {
  component: ResponsesPageSingleTextboxQ,
  title: "ResponsesPageSingleTextboxQ",
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
  question_variant: "single_choice",
  question_text: "Mulitple choice question 2",
  answer_choices: [
    {
      choice_label: "Yelloo",
      ce_choice_id: 244,
      date_created: "2024-03-25T20:22:37.072125",
      date_modified: "2024-03-25T20:22:37.072126",
      choice_position: 1,
    },
    {
      choice_label: "Blue",
      ce_choice_id: 245,
      date_created: "2024-03-25T20:22:37.086166",
      date_modified: "2024-03-25T20:22:37.086167",
      choice_position: 2,
    },
    {
      choice_label: "Green",
      ce_choice_id: 246,
      date_created: "2024-03-25T20:22:37.090247",
      date_modified: "2024-03-25T20:22:37.090247",
      choice_position: 3,
    },
  ],
  has_other_answer_choice: false,
  survey_id: 228,
  page_id: 257,
  question_position: 1,
  question_id: 168,
  date_created: "2024-03-25T20:22:37.046128",
  date_modified: "2024-03-25T20:22:37.046129",
};

let responses: any[] = [
  { question_id: 168, ce_choice_id: 246 },
  { question_id: 168, ce_choice_id: 245 },
];

console.log(responses);
const addOrUpdateResponse = (newResponse: any) => {
  console.log(responses);
  const filterArr = responses.filter(
    (response) => response.question_id != newResponse.question_id,
  );
  filterArr.push(newResponse);
  responses = filterArr;
  console.log(responses);
};

const question = {
  question_type: "open_ended",
  question_variant: "single_choice",
  question_text: "Test single textbox question",
  answer_choices: [
    {
      open_ended_choice_type: "question",
      choice_label: "Test single textbox question",
      question_id: 196,
      oe_choice_id: 66,
      choice_position: 1,
      date_created: "2024-03-27T17:16:21.600215",
      date_modified: "2024-03-27T17:16:21.600216",
    },
  ],
  has_other_answer_choice: false,
  survey_id: 230,
  page_id: 260,
  question_position: 1,
  question_id: 196,
  date_created: "2024-03-27T17:16:21.585778",
  date_modified: "2024-03-27T17:16:21.585779",
};

export const Default = () => (
  <ResponsesPageSingleTextboxQ question={question} />
);

console.log(responses);
