import './testContent.scss'

import Answer from '../answer/answer'
import { useState } from 'react'

function TestContent(props){

    const [selectedRadio, setSelectedRadio] = useState(null)

    const handleSelection = (value) => {
        setSelectedRadio(value)
        console.log(value)
    }

    return(
        <div className="testContent">

            <div className="testContent_question">
                <div className="testContent_question_heading">Питання</div>
                <div className="testContent_question_questionText">{props.data.question_text}</div>
            </div>

            <div className="testContent_answers">
                <div className="testContent_answers_querstionType">Виберіть одну правильну відповідь</div>

                <div className="testContent_answers_answerlist">
                    {props.data.answers.map((data, index) => (
                        <Answer handleSelection = {handleSelection} value = {index} key = {index} selectedRadio = {selectedRadio} data = {data}></Answer>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestContent