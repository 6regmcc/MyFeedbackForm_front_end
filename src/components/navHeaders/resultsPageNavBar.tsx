import {
  HStack,
  Text,
  Flex,
  Spacer,
  Box,
  Avatar,
  Button,
} from "@chakra-ui/react";

const ResultsPageNavBar = () => {
  return (
    <Box>
      <Flex>
        <Text>My Feedback Form</Text>
        <Spacer />
        <HStack>
          <Avatar name="Greg McCarthy" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default ResultsPageNavBar;
