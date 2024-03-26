import { Box, Card } from "@chakra-ui/react";
import responsesPageReturnQuestion from "../../utils/responsesPageReturnQuestion.tsx";
const ResponsePageListQuestions = ({ questions, addOrUpdateAnswers }: any) => {
  // @ts-ignore

  return (
    <Card boxShadow="base" p={4} mt={10}>
      {questions.map((question: any) => {
        return (
          <Box key={question.question_id}>
            {responsesPageReturnQuestion({ question, addOrUpdateAnswers })}
          </Box>
        );
      })}
    </Card>
  );
};

export default ResponsePageListQuestions;
