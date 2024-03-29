import { Box, Card } from "@chakra-ui/react";
import responsesPageReturnQuestion from "../../utils/responsesPageReturnQuestion.tsx";
const ResponsePageListQuestions = ({ questions, addOrUpdateAnswers }: any) => {
  // @ts-ignore

  return (
    <Box>
      <Card rounded="md" boxShadow="base" p={4} mt={10}>
        {questions.map((question: any) => {
          return (
            <Box
              rounded="md"
              boxShadow="base"
              p={4}
              m={4}
              key={question.question_id}
            >
              {responsesPageReturnQuestion({ question, addOrUpdateAnswers })}
            </Box>
          );
        })}
      </Card>
    </Box>
  );
};

export default ResponsePageListQuestions;
