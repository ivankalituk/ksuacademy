import './lectionDevelopmentPage.scss'

import TextEditor from '../../components/textEditor/textEditor'

function LectionDevelopmentPage(){
    return(
        <div className="lectionDevPage">
            <div className="lectionDevPage_container">

                <div className="lectionDevPage_lectionName">
                    <div className="lectionDevPage_lectionName_heading">Назва лекції</div>

                    <input type="text" placeholder='Назва лекції'/>
                </div>

                <div className="lectionDevPage_lectionContent">
                    <div className="lectionDevPage_lectionContent_heading">Контент лекції</div>

                    <TextEditor></TextEditor>
                </div>

                <div className="lectionDevPage_lectionControll">
                    <button>Змінити лекцію</button>
                    <button>Видалити лекцію</button>
                </div>


            </div>
        </div>
    )
}

export default LectionDevelopmentPage