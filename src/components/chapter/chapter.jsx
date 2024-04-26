import { Link } from "react-router-dom"

import './chapter.scss'

import del from '../../assets/photos/delete.svg'
import chapterImg from '../../assets/photos/sampleChapterLogo.svg'
import edit from '../../assets/photos/edit.svg'

import { useFetchRequest } from "../../hooks/hook"
import { getThemesByChapterId } from "../../api/theme"
import { useState } from "react"

function Chapter(props){

    // получение тем
    const {data: themes, isFeching: themesIsFetching} = useFetchRequest({fetchFunc: () => getThemesByChapterId(props.data.chapter_id), key: []})

    // режим редактирования
    const [editMode, setEditMode] = useState(false)

    const handleEditMode = () =>{
        setEditMode(!editMode)
    }

    return(
        <div className="chapter">
            <div className="chapter_header">
                <div className="chapter_header_logo">
                    <img src={chapterImg} alt="chapterLogo" />
                </div>

                <div className="chapter_header_heading">
                    {!editMode && <Link to={`/course/${props.data.course_id}/chapter/${props.data.chapter_id}`} className='chapter_header_heading_name'>{props.data.chapter_name}</Link>}
                    
                    {editMode && <input type="text" placeholder="Введіть назву розділу"></input>}


                    {props.isTeacher && (      
                        <div className="chapter_header_heading_teacherGroup">
                            <button className="chapter_header_heading_edit" onClick={handleEditMode}>
                                <img src={edit} alt="edit" />
                            </button>

                            <button className="chapter_header_heading_del">
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