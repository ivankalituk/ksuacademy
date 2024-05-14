import './lectionDevelopmentPage.scss'

import TextEditor from '../../components/textEditor/textEditor'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from '../../hooks/hook'
import { createLection } from '../../api/lection'


function LectionDevelopmentPage(){

    // const {theme_id} = useParams()
    const theme_id = 1

    const [content, setContent] = useState(null)                //для сохранения контента лекции
    const [lectionName, setLectionName] = useState('')          //для созранения названия лекции

    // пост запрос на создание лекции
    const {mutatedFunc: postLection} = useRequest({fetchFunc: createLection})

    // создание лекции
    const handleLectionCreate = async () =>{
        if (lectionName !== '' && content && content !== '<p><br></p>'){
            const data = {
                lection_name: lectionName,
                lection_content: content,
                theme_id: theme_id
            }

            await postLection(data)
            console.log("FETCHING")
        } else {
            alert("Поля введення назви лекції або її контенту порожні")
        }
    }

    // удаление лекции
    const handleLectionDelete = () => {
        console.log("DELETE")
    }




    return(
        <div className="lectionDevPage">
            <div className="lectionDevPage_container">

                <div className="lectionDevPage_lectionName">
                    <div className="lectionDevPage_lectionName_heading">Назва лекції</div>

                    <input type="text" placeholder='Назва лекції' value={lectionName} onChange={(event) => {setLectionName(event.target.value)}}/>
                </div>

                <div className="lectionDevPage_lectionContent">
                    <div className="lectionDevPage_lectionContent_heading">Контент лекції</div>

                    <TextEditor onTextChange = {setContent}></TextEditor>
                </div>

                <div className="lectionDevPage_lectionControll">
                    <button onClick={handleLectionCreate}>Створити лекцію</button>
                    <button onClick={handleLectionDelete}>Видалити лекцію</button>
                </div>


            </div>
        </div>
    )
}

export default LectionDevelopmentPage