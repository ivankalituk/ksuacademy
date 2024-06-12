import './theme.scss'

import Material from './components/material/material'
import Practice from './components/practice/practice'

import del from '../../assets/photos/delete.svg'
import edit  from '../../assets/photos/edit.svg'

import { Link, useParams } from 'react-router-dom'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import { deleteTheme, updateTheme } from '../../api/theme'
import { useState } from 'react'
import { createLection, getLections } from '../../api/lection'

function Theme(props){

    const [editMode, setEditMode] = useState(false)         //режим редактирования
    const [nameInput, setNameInput] = useState('')          //сохранение инпута названия темы

    const [lectionsKey, setLectionsKey] = useState(1)
    // удаление темы
    const {mutatedFunc: themeDelete} = useRequest({fetchFunc: deleteTheme})

    // изменение темы
    const {mutatedFunc: themeUpdate} = useRequest({fetchFunc: updateTheme})
    
    // получение лекций
    const {data: lections, isFetching: lectionsFetcing} = useFetchRequest({fetchFunc: ()=>getLections({theme_id: props.data.theme_id}), key: [lectionsKey], enebled: true})

    // создание лекции
    const {mutatedFunc: postLection} = useRequest({fetchFunc: createLection})

    console.log(lections)

    console.log('theme_id', props.data.theme_id)
    // функция удаления темы
    const handleDelete = async() => {
        await themeDelete({theme_id: props.data.theme_id})
        props.themesKeyCallback()
    }

    // функция изменения темы
    const handleEdit = async (event) => {
        if (event.key === 'Enter'){
            if (nameInput !== ''){
                await themeUpdate({theme_id: props.data.theme_id, theme_name: nameInput})
                props.themesKeyCallback()
            } else {
                alert('Поле вводу теми порожнє')
            }
        }
    }
    
    const handleCreateLection = async() => {
        await postLection({
            lection_name: 'Нова лекція',
            lection_content: '',
            theme_id: props.data.theme_id,
            lection_ready: false
        })
        setLectionsKey(lectionsKey + 1)
    } 


    return(
        <div className="theme">
            <div className="theme_heading">
                {!editMode && <div className="theme_heading_name">{props.data.theme_name}</div>}
                
                {editMode && <input type="text" placeholder='Нова назва теми' onKeyDown = {handleEdit} value={nameInput} onChange={(event)=> {setNameInput(event.target.value)}}/>}

                {props.role === 'teacher' && 
                    <div className="theme_heading_buttons">
                        <button className="theme_heading_edit" onClick= {()=> {setEditMode(!editMode)}}><img src={edit} alt="edit" /></button>

                        <button className="theme_heading_delete" onClick={handleDelete}><img src={del} alt="delete" /></button>
                    </div>}

            </div>

            <div className="theme_education">
                <div className="theme_materialsBlock">
                    <div className="theme_education_heading">Навчальні матеріали</div>

                    <div className="theme_materials_list">
                        {lectionsFetcing && lections.map((data, index) => (
                            props.role === 'teacher'? <Material data = {data} key={index} role = {props.role} theme_id = {props.data.theme_id} ready = {data.lection_ready}></Material>
                            :
                            (data.lection_ready? <Material data = {data} key={index} role = {props.role} theme_id = {props.data.theme_id} ready = {data.lection_ready}></Material> : null)
                        ))}
                        
                        {props.role === 'teacher' && <div className="theme_material_create" onClick={handleCreateLection}>+ Створити лекцію</div>}
                    </div>
                </div>

                <div className="theme_practiceBlock">
                    <div className="theme_education_heading">Практичні завдання</div>

                    <div className="theme_practice_list">
                        <Practice></Practice>

                        {props.role === 'teacher' && <div className="theme_practice_create">+ Створити тест</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme