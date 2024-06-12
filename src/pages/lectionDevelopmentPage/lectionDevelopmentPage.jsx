import './lectionDevelopmentPage.scss'

import TextEditor from '../../components/textEditor/textEditor'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import {  deleteLection, getOneLection, putLection } from '../../api/lection'
import TestDev from '../../components/testDev/testDev'
import { getLectionTest, postLectionTest } from '../../api/lectionTest'
import { testCheckFunc } from '../../utils/testCheckFunc'


function LectionDevelopmentPage(){

    const {course_id, chapter_id, theme_id, lection_id} = useParams()

    const [content, setContent] = useState(null)                //для сохранения контента лекции
    const [lectionName, setLectionName] = useState('')          //для созранения названия лекции
    const [lectionKey, setLectionKey] = useState(1)             //ключ получения если это редактирования
    const [test, setTest] = useState([])


    const navigate = useNavigate()
    
    // получение уже готовой лекции
    const {data: lection, isFetching: lectionFetching} = useFetchRequest({fetchFunc: () => getOneLection({lection_id: lection_id}), key: [lectionKey], enebled: true})

    //обновление лекции
    const {mutatedFunc: updateLection} = useRequest({fetchFunc: putLection})

    // удаление лекции
    const {mutatedFunc: delLection} = useRequest({fetchFunc:  deleteLection})

    // добавление теста в лекцию
    const {mutatedFunc: createLectionTest} = useRequest({fetchFunc: postLectionTest})

    // получение теста
    const {data: quiz, isFetching: quizFetching} = useFetchRequest({fetchFunc: () => getLectionTest({lection_id: lection_id}), key: [], enebled: true})


    useEffect(() => {
        if(lectionFetching){
            setLectionName(lection[0].lection_name)
        }
        
    }, [lectionFetching])
    
    // создание лекции
    const handleLectionCreate = async () =>{

        // проверяем заполнены ли поля лекции
        if (lectionName !== '' && content && content !== '<p><br></p>'){
         
            // проверяем валидность теста
            if (testCheckFunc(test)){

                // дата для лекции
                const data = {
                    lection_name: lectionName,
                    lection_content: content,
                    theme_id: theme_id,
                    lection_id: lection_id,
                    lection_ready: true
                }
                
                // обновление лекции
                await updateLection(data)
                //обновление теста лекции
                await createLectionTest({testMass: test, lection_id: lection_id})
                // переход на страницу тем
                navigate(`/courseDevelopment/${course_id}/themeDevelopment/${chapter_id}`)
            } else {
                alert("Тестові поля або відповіді не заповнені")
            }
        } else {
            alert("Поля введення назви лекції або її контенту порожні(не відбулось змін)")
        }
    }

    // удаление лекции
    const handleLectionDelete = async() => {
        await delLection({lection_id: lection_id})
        navigate(`/courseDevelopment/${course_id}/themeDevelopment/${chapter_id}`)

    }

    // колбек для изменения теста
    const handleSetTest = (updatedTest) => {
        setTest(updatedTest)
    }

    // проверка на валидность теста
    // const testValidation = (questions) => {
    //     return questions.length > 0 && questions.every((q) => {
    //       return (
    //         q.question &&
    //         Array.isArray(q.options) &&
    //         q.options.length > 0 &&
    //         q.options.every((option) => option !== '') &&
    //         Array.isArray(q.correctAnswer) &&
    //         q.correctAnswer.length > 0 &&
    //         q.correctAnswer.every((answer) => answer !== '') &&
    //         q.inputMode
    //       );
    //     });
    //   };

    // по нажатию на кнопку обновления лекции должно происходить обновление лекции и создание теста
    // тест принимается в виде массива, который нужно отдельно разделить на данные и занести в бд

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

                <div className="testDevList">
                    {quizFetching && <TestDev handleSetTest = {handleSetTest} test = {quiz} mode = {'lection'}/>}
                </div>

                <div className="lectionDevPage_lectionControll">
                    <button onClick={handleLectionCreate} >Оновити лекцію</button>
                    <button onClick={handleLectionDelete} >Видалити лекцію</button>
                </div>

            </div>
        </div>
    )
}

export default LectionDevelopmentPage