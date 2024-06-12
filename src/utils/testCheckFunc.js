export const testCheckFunc = (questions) => {
    return questions.length > 0 && questions.every((q) => {
      return (
        q.question &&
        Array.isArray(q.options) &&
        q.options.length > 0 &&
        q.options.every((option) => option !== '') &&
        Array.isArray(q.correctAnswer) &&
        q.correctAnswer.length > 0 &&
        q.correctAnswer.every((answer) => answer !== '') &&
        q.inputMode
      );
    });
  };
