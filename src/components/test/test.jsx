import React, { useState } from 'react';
import './test.scss'

// Тестовые данные
const questions = [
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: ['4'],
    inputMode: 'radio',
  },
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: ['Paris'],
    inputMode: 'radio',
  },
  {
    question: 'What is |x| = 2?',
    options: ['2', '-2', '4', '10'],
    correctAnswer: ['2', '-2'],
    inputMode: 'checkbox',
  },
];

const Test = ({ mode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);          //индекс текущего вопроса 
  const [selectedOptions, setSelectedOptions] = useState({});         //сохранение выбранного ответа
  const [score, setScore] = useState(0);                              //сохранение результата для итогового теста
  const [showResults, setShowResults] = useState(false);              //для отображение результатов НЕ ИСПОЛЬЗУЕТСЯ 
  const [wrongAnswer, setWrongAnswer] = useState(false);              //для отображения подсказки в случае неправильного ответа
  
  // сохранение выбора пользователя
  const handleOptionChange = (event) => {
    const value = event.target.value;
    const question = questions[currentQuestion];
    let newSelectedOptions = { ...selectedOptions };

    
    if (question.inputMode === 'radio') {
      newSelectedOptions[currentQuestion] = [value];          //если это радиобокс, то сохраняем в ответ только текущий ответ
    } else {
      if (!newSelectedOptions[currentQuestion]) {
        newSelectedOptions[currentQuestion] = [];
      }
      if (newSelectedOptions[currentQuestion].includes(value)) {
        newSelectedOptions[currentQuestion] = newSelectedOptions[currentQuestion].filter((option) => option !== value);
      } else {
        newSelectedOptions[currentQuestion].push(value);
      }
    }
    setSelectedOptions(newSelectedOptions);     //окончательное добавление новых ответов
    setWrongAnswer(false);                      //меняем отображение подсказок, на случай если это повторный ввод ответа           
  };  

  // проверка ответа и отображение следующего вопроса (если верно) для mode 1
  const handleNextQuestion = () => {
    if (mode === 1) {
      if (arraysEqual(selectedOptions[currentQuestion] || [], questions[currentQuestion].correctAnswer)) {
        setScore(score + 1);
        setWrongAnswer(false);
      } else {
        setWrongAnswer(true);
        return;
      }
    }

    if (currentQuestion >= questions.length - 1){
        console.log('ENDED')
        // КОД ДЛЯ СОХРАНЕНИЯЯ ПРОХОЖДЕНИЯ ЛЕКЦИИ
        // КОД ДЛЯ ПЕРЕХОДА НА СТРАНИЦУ ТЕМ
    } else {
        setCurrentQuestion(currentQuestion + 1);
    }
  };

  // проверка ответов и отображение оценки для mode 2
  const handleSubmitQuiz = () => {
    const finalScore = questions.reduce((acc, question, index) => {
      return acc + (arraysEqual(selectedOptions[index] || [], question.correctAnswer) ? 1 : 0);
    }, 0);
    setScore(finalScore);

    // показать результаты
    console.log(finalScore)
    // setShowResults(true);
  };

  // сравнение массивов
  const arraysEqual = (arr1, arr2) => {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
  };

  return(
      <div className='test'>
        <div className="test_heading">Завдання</div>

        <div className="test_questionNumber">Питання {currentQuestion + 1}</div>

        <div className="test_questionText">{questions[currentQuestion].question}</div>

        <div className="test_questionType">{(questions[currentQuestion].inputMode === "checkbox")? "Виберіть довільну кількість відповідей" : "Виберіть одну правильну відповідь"}</div>
        
        {/* ОТОБРАЖЕНИЕ ОТВЕТОВ */}
        <div className="test_answers">
            {questions[currentQuestion].options.map((option, index) => (

                <div key={index} className={`test_answers_answer ${selectedOptions[currentQuestion] && selectedOptions[currentQuestion].includes(option) ? 'selected' : ''}`}>

                    <div className="test_answer_answerNumber">{index + 1}</div>
                    <span className={`test_answer_answerText ${selectedOptions[currentQuestion] && selectedOptions[currentQuestion].includes(option) ? 'selected' : ''}`}>{option}</span>
                    
                    <input
                        type={questions[currentQuestion].inputMode}
                        value={option}
                        checked={selectedOptions[currentQuestion] && selectedOptions[currentQuestion].includes(option)}
                        onChange={handleOptionChange}
                    />
                </div>
            ))}
        </div>
        
        {/* КНОПКА ДЛЯ СЛЕД / ПРОВЕРКИ / ЗАВЕРШЕНИЯ ТЕСТА */}
        {mode === 1 ? (
          <>
            {wrongAnswer && <div className='test_wrongAns'>Неправильна відповідь, передивіться лекцію</div>}
            <button onClick={handleNextQuestion} disabled={!selectedOptions[currentQuestion] || selectedOptions[currentQuestion].length === 0}>
              Наступне питання
            </button>
          </>
        ) : (
          <>
            {currentQuestion < questions.length - 1 ? (
              <button onClick={handleNextQuestion} disabled={!selectedOptions[currentQuestion] || selectedOptions[currentQuestion].length === 0}>
                Наступне питання
              </button>
            ) : (
              <button onClick={handleSubmitQuiz} disabled={!selectedOptions[currentQuestion] || selectedOptions[currentQuestion].length === 0}>
                Завершити тест
              </button>
            )}
          </>
        )}
      </div>
  );
};

export default Test;
