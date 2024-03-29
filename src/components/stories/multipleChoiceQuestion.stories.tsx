import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import { SurveyType } from "../../types/types.ts";
import * as inspector from "inspector";
import MultipleChoiceQuestion from "../multipleChoiceQuestion.tsx";

const queryClient = new QueryClient();

export default {
  component: MultipleChoiceQuestion,
  title: "MultipleChoiceQuestion",
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

const exampleQuestion = {
  question_type: "closed_ended",
  question_variant: "single_choice",
  question_text: "string",
  answer_choices: [
    {
      choice_label: "string",
      ce_choice_id: 94,
      date_created: "2024-03-17T22:44:38.191383",
      date_modified: "2024-03-17T22:44:38.191385",
      choice_position: 1,
    },
    {
      choice_label: "string",
      ce_choice_id: 95,
      date_created: "2024-03-17T22:44:38.240716",
      date_modified: "2024-03-17T22:44:38.240719",
      choice_position: 2,
    },
  ],
  has_other_answer_choice: false,
  survey_id: 214,
  page_id: 219,
  question_position: 1,
  question_id: 104,
  date_created: "2024-03-17T22:44:38.091503",
  date_modified: "2024-03-17T22:44:38.091505",
};

export const Default = () => (
  <MultipleChoiceQuestion
    questionText={exampleQuestion.question_text}
    answerChoices={exampleQuestion.answer_choices}
    questionPosition={exampleQuestion.question_position}
  />
);
