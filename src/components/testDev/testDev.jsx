import React, { useState } from 'react';

const TestDev = ({ initialQuestions }) => {

    // тесты
    const [questions, setQuestions] = useState(initialQuestions !== undefined? initialQuestions : []);
    console.log(questions)
    // добавление вопроса
    const handleAddQuestion = () => {
        setQuestions([
        ...questions,
      {
        question: '',
        options: [''],
        correctAnswer: [],
        inputMode: 'radio',
      },
    ]);
  };

    //удаление вопроса
  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

    //добавление опшинов
  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push('');
    setQuestions(updatedQuestions);
  };
    //удаление опшнов
  const handleDeleteOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };
  
  //замена текста вопроса
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  // замена текста опшна
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  //запись правильного ответа
  const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    const correctAnswer = updatedQuestions[questionIndex].correctAnswer;
    if (updatedQuestions[questionIndex].inputMode === 'checkbox') {
      if (correctAnswer.includes(updatedQuestions[questionIndex].options[optionIndex])) {
        updatedQuestions[questionIndex].correctAnswer = correctAnswer.filter(
          (answer) => answer !== updatedQuestions[questionIndex].options[optionIndex]
        );
      } else {
        updatedQuestions[questionIndex].correctAnswer = [
          ...correctAnswer,
          updatedQuestions[questionIndex].options[optionIndex],
        ];
      }
    } else {
      updatedQuestions[questionIndex].correctAnswer = [
        updatedQuestions[questionIndex].options[optionIndex],
      ];
    }
    setQuestions(updatedQuestions);
  };

  //изменение режима инпутов опшнов
  const handleInputModeChange = (questionIndex, mode) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].inputMode = mode;
    updatedQuestions[questionIndex].correctAnswer = [];
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h2>Survey Builder</h2>
      <button onClick={handleAddQuestion}>Add Question</button>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <label>Question:</label>
          <input
            type="text"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
          />
          <label>Input Mode:</label>
          <div>
            <label>
              <input
                type="radio"
                value="radio"
                checked={question.inputMode === 'radio'}
                onChange={(e) => handleInputModeChange(index, e.target.value)}
              />
              Radio
            </label>
            <label>
              <input
                type="radio"
                value="checkbox"
                checked={question.inputMode === 'checkbox'}
                onChange={(e) => handleInputModeChange(index, e.target.value)}
              />
              Checkbox
            </label>
          </div>
          <label>Options:</label>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type={question.inputMode}
                name={`question-${index}`}
                value={option}
                checked={question.correctAnswer.includes(option)}
                onChange={() => handleCorrectAnswerChange(index, optionIndex)}
              />
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
              />
              <button onClick={() => handleDeleteOption(index, optionIndex)}>Delete Option</button>
            </div>
          ))}
          <button onClick={() => handleAddOption(index)}>Add Option</button>
          <button onClick={() => handleDeleteQuestion(index)}>Delete Question</button>
        </div>
      ))}
    </div>
  );
};



export default TestDev;
