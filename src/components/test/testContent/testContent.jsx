import './testContent.scss'

import Answer from '../answer/answer'

function TestContent(){
    return(
        <div className="testContent">

            <div className="testContent_question">
                <div className="testContent_question_heading">Питання</div>
                <div className="testContent_question_questionText">ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ</div>
            </div>

            <div className="testContent_answers">
                <div className="testContent_answers_querstionType">Виберіть одну правильну відповідь</div>

                <div className="testContent_answers_answerlist">
                    <Answer></Answer>

                </div>



            </div>


        </div>
    )
}

export default TestContent