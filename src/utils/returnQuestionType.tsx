import CheckboxQuestion from "../components/checkboxQuestion.tsx";
import MultipleChoiceQuestion from "../components/multipleChoiceQuestion.tsx";
const returnQuestionType = (
  index: number,
  question: any,
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

export default returnQuestionType;
