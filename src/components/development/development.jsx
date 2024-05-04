import { useState } from 'react'
import './development.scss'
import { useRequest } from '../../hooks/hook'
import { postChapter } from '../../api/chapter'
import { createTheme } from '../../api/theme'

function Development(props){

    // props.mode chapter/theme

    // console.log(props.course_id)

    const [devInput, setDevInput] = useState('')                    //переменная для хранения инпута

    //получение функции создания предмета
    const {mutatedFunc: createChapterFunc} = useRequest({fetchFunc: postChapter})

    //функция создание темы
    const {mutatedFunc: themeCreate} = useRequest({fetchFunc: createTheme})

    //создание предмета 
    const handleCreate = async () => {

        if (devInput !== ''){
            if (props.mode === "chapter"){
                await createChapterFunc({course_id: props.course_id.value, chapter_name: devInput})
                props.handleChaptersChange()
            } else {
                console.log({chapter_id: props.chapter_id, theme_name: devInput})
                await themeCreate({chapter_id: props.chapter_id, theme_name: devInput})
                props.themesKeyCallback()
            }

            setDevInput('')
        } else {
            alert('Назва розділу порожня')
        }
    }

    // создание предмета по энтеру в инпуте
    const handleInputEnter = (event) =>{
        if (event.key === 'Enter'){
            handleCreate()
        }
    }


    return(
        <div className="development">
            <div className="development_heading">{(props.mode === 'chapter')? 'Створення розділу' : 'Створення теми'}</div>

            <div className="development_createGroup">
                <input type="text" placeholder={(props.mode === 'chapter')? 'Назва розділу' : 'Назва теми'} onChange={ (event) => {setDevInput(event.target.value)}} onKeyDown={handleInputEnter} value={devInput}/>
                <button onClick={handleCreate}>{(props.mode === 'chapter')? '+ Створити розділ' : '+ Створити тему'}</button>
            </div>
        </div>
    )
}

export default Development