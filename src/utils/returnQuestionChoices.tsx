import CheckboxQuestion from "../components/checkboxQuestion.tsx";
import MultipleChoiceQuestion from "../components/multipleChoiceQuestion.tsx";
const returnQuestionChoices = (
  index: number,
  question: any,
  surveyId: number,
  page_id: number,
  question_id: number,
  isDisabled: Boolean,
) => {
  if (
    question.question_type === "closed_ended" &&
    question.question_variant === "single_choice"
  ) {
    return (
      <MultipleChoiceQuestion
        key={index}
        questionText={question.question_text}
        answerChoices={question.answer_choices}
        questionPosition={question.question_position}
        survey_id={surveyId}
        page_id={page_id}
        question_id={question_id}
        isDisabled={isDisabled}
      />
    );
  } else if (
    question.question_type === "closed_ended" &&
    question.question_variant === "multi_choice"
  ) {
    return (
      <CheckboxQuestion
        key={index}
        questionText={question.question_text}
        answerChoices={question.answer_choices}
        questionPosition={question.question_position}
        survey_id={surveyId}
        page_id={page_id}
        question_id={question_id}
        isDisabled={isDisabled}
      />
    );
  } else if (
    question.question_type === "open_ended" &&
    question.question_variant === "single_choice"
  ) {
    return;
  }
};

export default returnQuestionChoices;
