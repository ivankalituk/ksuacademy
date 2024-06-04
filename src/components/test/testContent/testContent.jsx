import './testContent.scss'

import Answer from '../answer/answer'
import { useState } from 'react'

function TestContent(){

    const [selectedRadio, setSelectedRadio] = useState(null)

    const handleSelection = (value) => {
        setSelectedRadio(value)
        console.log(value)
    }

    return(
        <div className="testContent">

            <div className="testContent_question">
                <div className="testContent_question_heading">Питання</div>
                <div className="testContent_question_questionText">ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ ТЕКСТ ЗАПИТАННЯ</div>
            </div>

            <div className="testContent_answers">
                <div className="testContent_answers_querstionType">Виберіть одну правильну відповідь</div>

                <div className="testContent_answers_answerlist">
                    <Answer handleSelection = {handleSelection} value = {1} selectedRadio = {selectedRadio}></Answer>
                    <Answer handleSelection = {handleSelection} value = {2} selectedRadio = {selectedRadio}></Answer>
                    <Answer handleSelection = {handleSelection} value = {3} selectedRadio = {selectedRadio}></Answer>

                </div>



            </div>


        </div>
    )
}

export default TestContent