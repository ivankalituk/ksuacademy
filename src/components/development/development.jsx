import { useState } from 'react'
import './development.scss'
import { useRequest } from '../../hooks/hook'
import { postChapter } from '../../api/chapter'

function Development(props){

    // props.mode chapter/theme

    const [devInput, setDevInput] = useState('')                    //переменная для хранения инпута

    //получение функции создания предмета
    const {mutatedFunc: createChapterFunc} = useRequest({fetchFunc: postChapter})

    //создание предмета 
    const handleCreate = () => {

        if (devInput !== ''){
            console.log(props.course_id)
            createChapterFunc({course_id: props.course_id, chapter_name: devInput})

            // КОЛБЕК СМЕНЫ КЛЮЧА ДЛЯ ПОЛУЧЕНИЯ РАЗДЕЛОВ
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
                <input type="text" placeholder={(props.mode === 'chapter')? 'Назва розділу' : 'Назва теми'} onChange={ (event) => {setDevInput(event.target.value)}} onKeyDown={handleInputEnter}/>
                <button onClick={handleCreate}>{(props.mode === 'chapter')? '+ Створити розділ' : '+ Створити тему'}</button>
            </div>
        </div>
    )
}

export default Development