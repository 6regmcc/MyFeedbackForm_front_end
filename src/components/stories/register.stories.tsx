import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import Register from "../register.tsx";

const queryClient = new QueryClient();

export default {
  component: Register,
  title: "Registerddd",
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
