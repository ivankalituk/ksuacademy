import { Link } from "react-router-dom"

import './chapter.scss'

import del from '../../assets/photos/delete.svg'
import chapterImg from '../../assets/photos/sampleChapterLogo.svg'
import edit from '../../assets/photos/edit.svg'
import addPhoto from '../../assets/photos/addPhoto.svg'


import { useFetchRequest, useRequest } from "../../hooks/hook"
import { getThemesByChapterId } from "../../api/theme"
import { useState } from "react"
import { deleteChapter, getOneChapter, updateChapter } from "../../api/chapter"

function Chapter(props){

    const [editMode, setEditMode] = useState(false)                 //режим редактирования (смена названия)
    const [chapterInputValue, setChapterInputValue] = useState('')  //инпут для смены названия темы
    const [selectedImg, setSelectedImg] = useState(null)            //для сохранения нового фото раздела (ТОЛЬКО ОТОБРАЖЕНИЕ)
    const [selectedImgFile, setSelectedImgFile] = useState(null)    //для сохранение нового фото в виде файла (ДЛЯ ПЕРЕДАЧИ НА СЕРВЕР)
    const [chapterKey, setChapterKey] = useState(1)                 //для обновления раздела
    const [themeKey, setThemeKey] = useState(1)                     //для обновления тем

    // получение тем
    const {data: themes, isFetching: themesIsFetching} = useFetchRequest({fetchFunc: () => getThemesByChapterId({chapter_id: props.chapter_id}), key: [themeKey], enebled: true})

    // update запрос обновление раздела
    const {mutatedFunc: chapterUpdateFunc} = useRequest({fetchFunc: updateChapter})

    // удаление раздела
    const {mutatedFunc: chapterDelete} = useRequest({fetchFunc: deleteChapter})

    // получение данных одного раздела
    const {data: chapter, isFetching: chapterIsFetching} = useFetchRequest({fetchFunc: ()=> getOneChapter({chapter_id: props.chapter_id}), key: [chapterKey], enebled: true})

    // нажатие на кнопку редактирования (смены названия)
    const handleEditMode = () =>{
        setEditMode(!editMode)
    }

    // обработка обновления раздела по нажатию на Enter
    const handleEnterInput = async (event) => {
        if (event.key === "Enter"){
            // если хоть какое-то из двух полей заполнено
            if((chapterInputValue !== '') || (selectedImgFile !== null)){
                
                const data =  new FormData()
                data.append('chapter_id',  props.chapter_id)

    

                if (chapterInputValue !== ''){
                    data.append('chapter_name', chapterInputValue)
                } else {

                    data.append('chapter_name', chapter[0].chapter_name)
                }

                if (selectedImgFile !== null){
                    data.append('photo', selectedImgFile)
                }
                
                console.log(data)
                await chapterUpdateFunc(data)

                setEditMode(!editMode)
                setChapterInputValue('')

                // изменение ключа ТЕКУЩЕГО раздела
                setChapterKey(chapterKey + 1)
            }else{
                alert("Поле вводу назви розділу порожнє")
            }
        }
    }

    // удаление раздела
    const handleDelete = async () => {

        if (themes.length > 0){
            alert("Спочатку видаліть теми розділу")
        } else {
            await chapterDelete({chapter_id: props.chapter_id})

            // измменение ключа ВСЕХ разделов 
            props.handleChaptersChange()
        }
    }

    // новое фото раздела
    const handleImgChange = (event) =>  {
        const file = event.target.files[0]
        setSelectedImgFile(file)
        const reader = new FileReader()

        reader.onload =  () =>{
            setSelectedImg(reader.result)
        }

        reader.readAsDataURL(file)
    }


    return(      
        <>
            {chapterIsFetching && <div className="chapter">
                <div className="chapter_header">
                    <div className="chapter_header_logo">
                    
                        {/* отображение фото, есди есть на сервере, то отображать, если нету, то отображать пример, если выбрано, то выбранное */}
                        {chapter[0].img_path? (selectedImg ? <img src={selectedImg} alt="chapterLogo" /> : <img src={'http://localhost:1000/' + chapter[0].img_path} alt="chapterLogo" />) : (selectedImg ? <img src={selectedImg} alt="chapterLogo" /> : <img src={chapterImg} alt="chapterLogo" />)}

                    </div>

                    {editMode && <div className="chapter_header_logoInput">
                        <input type="file" onChange={handleImgChange} />
                        <img src={addPhoto} alt="addPhoto" />
                    </div>}

                    <div className="chapter_header_heading">
                        {!editMode && <Link to={props.isTeacher? `/courseDevelopment/${props.course_id}/themeDevelopment/${props.chapter_id}` : `/course/${props.course_id}/chapter/${props.chapter_id}`} className='chapter_header_heading_name'>{chapter[0].chapter_name}</Link>}
                        
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
                        <Link key={index} to={props.isTeacher? `/courseDevelopment/${props.course_id}/themeDevelopment/${props.chapter_id}` : `/course/${props.course_id}/chapter/${props.chapter_id}`} >{data.theme_name}</Link>
                    ))}
                </div>
            </div>}
        </>
    )
}

export default Chapter