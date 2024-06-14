import './finalTestDevPage.scss'

import TestDev from '../../components/testDev/testDev'
import { useState } from 'react'
import { testCheckFunc } from '../../utils/testCheckFunc'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchRequest, useRequest } from '../../hooks/hook'

import { deleteThemeTest, getThemeTest, postThemeTest } from '../../api/themeTest'

function FinalTestDevPage(){
    const {theme_id, course_id, chapter_id} = useParams()
    
    const navigate = useNavigate()


    // получение тематического теста
    const {data: quiz, isFetching: quizFetching} = useFetchRequest({fetchFunc: () => getThemeTest({theme_id: theme_id}), key: [], enebled: true})

    // сохранение тематического теста
    const{mutatedFunc: createQuiz} = useRequest({fetchFunc: postThemeTest})

    // удаление тематического теста
    const {mutatedFunc: delQuiz} = useRequest({fetchFunc: deleteThemeTest})

    const [test, setTest] = useState([])



    const handleSetTest = (updatedTest) => {
        setTest(updatedTest)
    }

    const handleTestSubmit = async() =>{
        if(testCheckFunc(test)){
            await createQuiz({testMass: test, theme_id: theme_id})
            navigate(`/courseDevelopment/${course_id}/themeDevelopment/${chapter_id}`)
        } else {
            alert('Не заповнені необхідні поля')
        }
    }

    const handleDeleteTest = async() =>{
        await delQuiz({theme_id: theme_id})
    }

    return(
        <div className="finalTestDevPage">
            <div className="finalTestDevPage_container">
                <div className="finalTestDevPage_testDevContainer">
                    {quizFetching && <TestDev test ={quiz} handleSetTest = {handleSetTest} mode = {'theme'}/>}
                </div>

                <div className="finalTestDevPage_buttons">
                    <button onClick={handleTestSubmit}>Зберегти тест</button>
                    <button onClick={handleDeleteTest}>Видалити тест</button>
                </div>
            </div>
        </div>
    )
}

export default FinalTestDevPage