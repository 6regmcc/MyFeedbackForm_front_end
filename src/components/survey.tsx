import {
  Card,
  CardBody,
  HStack,
  Text,
  IconButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Survey = ({ surveyName, surveyId }: any) => {
  return (
    <Card my={4} maxWidth="500px">
      <CardBody>
        <Flex>
          <Text>{surveyName} </Text>
          <Spacer />
          <HStack spacing="10px">
            <IconButton aria-label="Edit Survey" icon={<EditIcon />} />
            <IconButton aria-label="Delete Survey" icon={<DeleteIcon />} />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};
export default Survey;
