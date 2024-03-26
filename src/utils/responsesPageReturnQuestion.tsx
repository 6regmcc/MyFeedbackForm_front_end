import ResponsesPageMultiChoiceQ from "../components/responsesPageComponents/responsesPageMultiChoiceQ.tsx";

const responsesPageReturnQuestion = ({
  question,
  existingResponse,
  addOrUpdateAnswers,
}: any) => {
  if (
    question.question_type === "closed_ended" &&
    question.question_variant === "single_choice"
  ) {
    return (
      <ResponsesPageMultiChoiceQ
        question={question}
        existingResponse={existingResponse}
        addOrUpdateAnswers={addOrUpdateAnswers}
      />
    );
  }
};

export default responsesPageReturnQuestion;
