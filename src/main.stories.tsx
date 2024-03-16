import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

export default {
  component: App,
  title: "Main",
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
