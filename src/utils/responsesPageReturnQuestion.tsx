import ResponsesPageMultiChoiceQ from "../components/responsesPageComponents/responsesPageMultiChoiceQ.tsx";
import ResponsesPageCheckboxQ from "../components/responsesPageComponents/responsesPageCheckboxQ.tsx";

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
  } else if (
    question.question_type === "closed_ended" &&
    question.question_variant === "multi_choice"
  ) {
    return (
      <ResponsesPageCheckboxQ
        question={question}
        existingResponse={existingResponse}
        addOrUpdateAnswers={addOrUpdateAnswers}
      />
    );
  }
};

export default responsesPageReturnQuestion;
