import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import Login from "../login.tsx";

const queryClient = new QueryClient();

export default {
  component: Login,
  title: "Login",
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>{Story()}</ChakraProvider>
      </QueryClientProvider>
    ),
  ],
};

export const Default = {
  args: {},
};
