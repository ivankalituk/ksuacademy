import './lectionDevelopmentPage.scss'

import TextEditor from '../../components/textEditor/textEditor'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import { createLection, deleteLection, getOneLection, putLection } from '../../api/lection'

function LectionDevelopmentPage(){

    const {course_id, chapter_id, theme_id, lection_id} = useParams()

    const [content, setContent] = useState(null)                //для сохранения контента лекции
    const [lectionName, setLectionName] = useState('')          //для созранения названия лекции

    const [lectionKey, setLectionKey] = useState(1)             //ключ получения если это редактирования

    const navigate = useNavigate()

    // получение уже готовой лекции
    const {data: lection, isFetching: lectionFetching} = useFetchRequest({fetchFunc: () => getOneLection({lection_id: lection_id}), key: [lectionKey], enebled: true})

    //обновление лекции
    const {mutatedFunc: updateLection} = useRequest({fetchFunc: putLection})

    // удаление лекции
    const {mutatedFunc: delLection} = useRequest({fetchFunc:  deleteLection})

    useEffect(() => {
        if(lectionFetching){
            setLectionName(lection[0].lection_name)
        }
        
    }, [lectionFetching])
    
    // создание лекции
    const handleLectionCreate = async () =>{
        if (lectionName !== '' && content && content !== '<p><br></p>'){
            const data = {
                lection_name: lectionName,
                lection_content: content,
                theme_id: theme_id,
                lection_id: lection_id
            }

            await updateLection(data)

            navigate(`/courseDevelopment/${course_id}/themeDevelopment/${chapter_id}`)

            console.log("FETCHING")
        } else {
            alert("Поля введення назви лекції або її контенту порожні(не відбулось змін)")
        }
    }

    // удаление лекции
    const handleLectionDelete = async() => {
        await delLection({lection_id: lection_id})
        navigate(`/courseDevelopment/${course_id}/themeDevelopment/${chapter_id}`)

    }

    return(
        <div className="lectionDevPage">
            <div className="lectionDevPage_container">

                <div className="lectionDevPage_lectionName">
                    {/* МЕНЯТЬ НАЗВАНИЕ ЛЕКЦИИ */}
                    <div className="lectionDevPage_lectionName_heading">Назва лекції</div>

                    <input type="text" placeholder='Назва лекції' value={lectionName} onChange={(event) => {setLectionName(event.target.value)}}/>
                </div>

                <div className="lectionDevPage_lectionContent">
                    <div className="lectionDevPage_lectionContent_heading">Контент лекції</div>


                    {/* ЗАМЕНИТЬ ЧТОБ БЫЛО ВОЗМОЖНОСТЬ МЕНЯТЬ И ДЛЯ РАЗРАБОТКИ ЛЕКЦИИ */}
                    {lectionFetching && <TextEditor onTextChange = {setContent} lection_contnent = {lection[0].lection_content} lection_id = {lection_id}></TextEditor>}
                </div>

                {/* ЗАМЕНИТЬ НА LINK */}
                <div className="lectionDevPage_lectionControll">
                    <button onClick={handleLectionCreate} >Оновити лекцію</button>
                    <button onClick={handleLectionDelete} >Видалити лекцію</button>
                </div>


            </div>
        </div>
    )
}

export default LectionDevelopmentPage