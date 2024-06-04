import { useState } from 'react'
import './answer.scss'

function Answer(props){

    const handleActive = () => {
        props.handleSelection(props.value)
    }

    return(
        <div className={(props.selectedRadio === props.value)? "testContent_answers_answer activeCutstomInput": "testContent_answers_answer"}>
            <div className="testContent_answers_answerNumber">1</div>
            <span style={(props.selectedRadio === props.value)? {color: "white", transition: "0.5s"} : {}}>Відповідь</span>
            <input type="radio" name="NAME" value={props.value} checked = {props.selectedRadio === props.value} onChange={handleActive}/>
        </div>
    )
}

export default Answer