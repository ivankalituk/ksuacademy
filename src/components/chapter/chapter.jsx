import { Link } from "react-router-dom"

import './chapter.scss'

import del from '../../assets/photos/delete.svg'
import chapterImg from '../../assets/photos/sampleChapterLogo.svg'
import edit from '../../assets/photos/edit.svg'

import { useFetchRequest, useRequest } from "../../hooks/hook"
import { getThemesByChapterId } from "../../api/theme"
import { useEffect, useState } from "react"
import { deleteChapter, updateChapter } from "../../api/chapter"

function Chapter(props){

    // получение тем
    const {data: themes, isFetching: themesIsFetching} = useFetchRequest({fetchFunc: () => getThemesByChapterId({chapter_id: props.data.chapter_id}), key: [], enebled: true})

    // update запрос обновление раздела
    const {mutatedFunc: chapterUpdateFunc, isFetching: chapterUpdateIsFetching, data: chaptedUpdateData} = useRequest({fetchFunc: updateChapter})

    // удаление раздела
    const {mutatedFunc: chapterDelete} = useRequest({fetchFunc: deleteChapter})


    const [editMode, setEditMode] = useState(false)                 //режим редактирования (смена названия)
    const [chapterInputValue, setChapterInputValue] = useState('')


    // нажатие на кнопку редактирования (смены названия)
    const handleEditMode = () =>{
        setEditMode(!editMode)
    }

    // обработка обновления раздела по нажатию на Enter
    const handleEnterInput = (event) => {
        if (event.key === "Enter"){

            if(chapterInputValue !== ''){
                chapterUpdateFunc({chapter_id: props.data.chapter_id, chapter_name: chapterInputValue})

                setEditMode(!editMode)
                setChapterInputValue('')

                // СДЕЛАТЬ ИЗМЕНЕНИЕ КЛЮЧА ПОЛУЧЕНИЯ РАЗДЕЛОВ

            }else{
                alert("Поле вводу назви розділу порожнє")
            }
        }
    }

    // удаление раздела
    const handleDelete = () => {
        chapterDelete({chapter_id: props.data.chapter_id})
        // alert('Розділ видалено')
        // console.log(props.data.chapter_id)
    }


    return(
        <div className="chapter">
            <div className="chapter_header">
                <div className="chapter_header_logo">
                    <img src={chapterImg} alt="chapterLogo" />
                </div>

                <div className="chapter_header_heading">
                    {!editMode && <Link to={`/course/${props.data.course_id}/chapter/${props.data.chapter_id}`} className='chapter_header_heading_name'>{props.data.chapter_name}</Link>}
                    
                    {editMode && <input type="text" onChange={(event) => {setChapterInputValue(event.target.value)}} placeholder="Введіть назву розділу" onKeyDown={handleEnterInput}></input>}


                    {props.isTeacher && (      
                        <div className="chapter_header_heading_teacherGroup">
                            <button className="chapter_header_heading_edit" onClick={handleEditMode}>
                                <img src={edit} alt="edit" />
                            </button>

                            <button className="chapter_header_heading_del" onClick={handleDelete}>
                                <img src={del} alt="delete" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="chapter_themes">
                {themesIsFetching && themes.map((data, index) => (
                    <Link key={index} to={`/course/${props.data.course_id}/chapter/${props.data.chapter_id}`}>{data.theme_name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Chapter