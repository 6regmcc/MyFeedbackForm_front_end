import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import Login from "../login.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export default {
  component: Login,
  title: "Login",
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

export const Default = {
  args: {},
};
