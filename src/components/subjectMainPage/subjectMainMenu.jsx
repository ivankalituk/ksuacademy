import './subjectMainMenu.scss'
import subjectLogo from '../../photos/subjectLogo.svg'
import arrow from '../../photos/arrow.svg'

import React from 'react'

function SubjectMainMenu(){

    let [inputCheck, setInputCheck] = React.useState(false)
    

    //сделать движение вверх вниз
    //https://reactgo.com/react-toggle-class/

    function checkLog(event){
        console.log(inputCheck)
        if (inputCheck){
            setInputCheck(!inputCheck);
        }
        else{
            setInputCheck(!inputCheck);
        }
    }

    return(
        <div className={inputCheck? "subjectMainMenu activeMenu": "subjectMainMenu"}>  
            <div className="menu_container">
                <div className="menu_header">
                    <a className="menu_heading" href='#'>

                        <div className="heading_image">
                            <img src={subjectLogo} alt="subj logo" />
                        </div>

                        <span>Назва предмету</span>

                    </a>

                    <div className="arrow">
                        <input type="checkbox" checked={inputCheck} onChange={(event) => checkLog(event)}/>
                        <img src={arrow} alt="arrow" className={inputCheck? "passiveCheckbox": "activeCheckbox"}/>
                    </div>
                </div>

                <div className="subThemes">
                    <a href="#">Тема #1</a>
                    <a href="#">Тема #2</a>
                    <a href="#">Тема #3</a>
                    <a href="#">Тема #4</a>
                    <a href="#">Тема #5</a>
                    <a href="#">Тема #6</a>
                    <a href="#">Тема #7</a>
                </div>
            </div>

        </div>
    )
}

export default SubjectMainMenu;