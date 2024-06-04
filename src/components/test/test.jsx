import './test.scss'

import TestContent from './testContent/testContent'


function Test(){

    const questions = [
        {
            question_text:  "2+2 = ?",
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
        }
    ]

    return(
        <div className="test">
            <div className="test_heading">Завдання</div>

            <div className="test_content">
                <TestContent></TestContent>
            </div>

            <div className="test_buttons">
                <button>Попереднє</button>
                <button>Наступне</button>
            </div>
        </div>
    )
}

export default Test