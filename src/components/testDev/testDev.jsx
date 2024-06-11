import React, { useState } from 'react';
import './testDev.scss'
const TestDev = ({ test, handleSetTest }) => {
  
  // тесты
  const [questions, setQuestions] = useState(test.data !== null? test : []);
  
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
    handleSetTest(questions)
  };

  //удаление вопроса
  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
    handleSetTest(updatedQuestions)
  };

  //добавление опшинов
  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push('');
    setQuestions(updatedQuestions);
    handleSetTest(questions)
  };

  //удаление опшнов
  const handleDeleteOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    updatedQuestions[questionIndex].correctAnswer = []
    setQuestions(updatedQuestions);
    handleSetTest(updatedQuestions)
  };
  
  //замена текста вопроса
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
    handleSetTest(updatedQuestions)
  };

  // замена текста опшна
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    updatedQuestions[questionIndex].correctAnswer = []
    setQuestions(updatedQuestions);
    handleSetTest(updatedQuestions)
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
    handleSetTest(updatedQuestions)
  };

  //изменение режима инпутов опшнов
  const handleInputModeChange = (questionIndex, mode) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].inputMode = mode;
    updatedQuestions[questionIndex].correctAnswer = [];
    setQuestions(updatedQuestions);
    handleSetTest(updatedQuestions)
  };

  return (
    <div className='testDev'>

      <div className="testDev_heading">Розроблення питань лекції</div>
      <button onClick={handleAddQuestion}>Додати питання</button>

      <div className="testDev_questions">
        {questions.map((question, index) => (
          <div key={index} className='testDev_question'>

            <div className='testDev_question_heading'>Питання {index + 1}</div>

            <div className="testDev_question_questionTextGroup">
              <span>Питання:</span>
              <input type="text" value={question.question} onChange={(event) => handleQuestionChange(index, 'question', event.target.value)} placeholder='Питання'/>
            </div>


            <div className="testDev_question_inputMode">
              <span>Виберіть кількість відповідей:</span>

              <div className="testDev_question_inputMode_modes">
                <div className="testDev_question_inputMode_mode">
                  <input type="radio" value="radio" checked={question.inputMode === 'radio'} onChange={(event) => handleInputModeChange(index, event.target.value)}/>
                  <div>Одна відповідь</div>
                </div>

                <div className="testDev_question_inputMode_mode">
                  <input type="radio" value="checkbox" checked={question.inputMode === 'checkbox'} onChange={(event) => handleInputModeChange(index, event.target.value)}/>
                  <div>Довільна кількість</div>
                </div>
              </div>
            </div>

            
            <div className="testDev_question_optionsGroup">
              <span>Відповіді</span>

              <div className="testDev_question_options">
                {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type={question.inputMode} name={`question-${index}`} value={option} checked={question.correctAnswer.includes(option)} onChange={() => handleCorrectAnswerChange(index, optionIndex)}/>
                  
                  <input type="text" value={option} onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}/>
                  
                  <button onClick={() => handleDeleteOption(index, optionIndex)}>Видалити</button>
                </div>
              ))}
              </div>
            </div>
            
            <div className="testDev_question_devButtons">
              <button onClick={() => handleAddOption(index)}>Add Option</button>
              <button onClick={() => handleDeleteQuestion(index)}>Delete Question</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default TestDev;
