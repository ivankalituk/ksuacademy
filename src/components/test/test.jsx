import { useState } from 'react'
import './test.scss'

import TestContent from './testContent/testContent'


function Test(){

    // текущий вопрос
    const [currentQuestion, setCurrentQuestion] = useState(0)

    // тестовые вопросы
    const questions = [
        {
            question_text:  "Питання 1:  2+2 = ?",
            answers: [
                {
                    answer_text: '3',
                    truth: false
                },
                {
                    answer_text: '4',
                    truth: true
                },
                {
                    answer_text: '6',
                    truth: false
                }
            ]
        },
        {
            question_text:  "Питання 2: 2+6 = ?",
            answers: [
                {
                    answer_text: '8',
                    truth: true
                },
                {
                    answer_text: '2',
                    truth: true
                },
                {
                    answer_text: '5',
                    truth: false
                }
            ]
        }
    ]

    const handleNextQuestion = () => {
        console.log(questions)
        if(currentQuestion < questions.length - 1){
            // делать так нельзя, заблокированно
            setCurrentQuestion(currentQuestion + 1)
            console.log(currentQuestion)
        } else {
            console.log("НЕЛЬЗЯ, КОНЕЦ СПИСКА")
        }
    }

    const  handlePrevQuestion = () => {
        if (currentQuestion !== 0){
            setCurrentQuestion(currentQuestion - 1)
            console.log(currentQuestion)
        } else {
            console.log('НЕЛЬЗЯ, ПРЕД ВОПРОСОВ НЕТУ')
        }
    }


    return(
        <div className="test">
            <div className="test_heading">Завдання</div>

            <div className="test_content">
                <TestContent data = {questions[currentQuestion]}></TestContent>
            </div>

            <div className="test_buttons">
                <button onClick={handlePrevQuestion}>Попереднє</button>
                <button onClick={handleNextQuestion}>Наступне</button>
            </div>
        </div>
    )
}

export default Test