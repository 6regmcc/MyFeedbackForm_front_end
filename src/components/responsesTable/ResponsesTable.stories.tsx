import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, OrderedList } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import TestResponsesTable from "./ResponsesTable.tsx";

import { useState } from "react";

const queryClient = new QueryClient();

export default {
  component: TestResponsesTable,
  title: "TestResponsesTable",
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

export const Default = () => <TestResponsesTable />;
