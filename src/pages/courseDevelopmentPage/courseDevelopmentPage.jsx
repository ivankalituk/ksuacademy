import  './courseDevelopmentPage.scss'

import Select from 'react-select'

import del from '../../assets/photos/delete.svg'

import Chapter from '../../components/chapter/chapter'
import Development from '../../components/development/development'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import { getAllCoursesByTeacherId, getOneCourse, postCourse, deleteCourse } from '../../api/course'
import { useState } from 'react'
import { createChapter, getChaptersByCourseId } from '../../api/chapter'
import { dataToOptions } from '../../utils/mutationFunctions'

function CourseDevelopmentPage(){

    
    // получение всех разделов преподавателя
    const teacher_id = 2;

    const [coursesKey, setCoursesKey] = useState(1)                     //ключ для обновления курсов

    const [courseKey, setCourseKey] = useState(1)                       //ключ для обновления одного курса
    const [courseEnebled, setCourseEnebled] = useState(false)           
    const [selectedCourse, setSelectedCourse] = useState(null)

    const [courseInput, setCourseInput] = useState('')                  //для инпута курсов

    const [chaptersKey, setChaptersKey] = useState(1)
    const [chaptersEnebled, setChaptersEnebled] = useState(false)

    // получение всех курсов преподавателя
    const {data: courses, isFetching: coursesFetching} = useFetchRequest({fetchFunc: ()=> getAllCoursesByTeacherId(teacher_id), enebled: true, mutationFunc: dataToOptions, key: [coursesKey]})

    // получение одного, выбранного курса
    const {data: course, isFetching: courseFetching} = useFetchRequest({fetchFunc: () => getOneCourse({course_id: selectedCourse.value}), enebled: courseEnebled, key: [courseKey]}) 

    //запрос на удаление выбранного курса
    const {mutatedFunc: courseDelete} = useRequest({fetchFunc: deleteCourse})

    //запрос для создания курса
    const {mutatedFunc: createCourse} = useRequest({fetchFunc: postCourse})

    // получение всех разделов курса
    const {data: chapters, isFetching: chaptersFetching} = useFetchRequest({fetchFunc: ()=> getChaptersByCourseId({course_id: selectedCourse.value}), enebled: chaptersEnebled, key: [chaptersKey]})


    // обработчик изменения селекта
    const handleSelect = (option) => {
        setSelectedCourse(option)           //присваиваем выбранный курс


        setCourseEnebled(true)
        setCourseKey(courseKey + 1)


        setChaptersEnebled(true)
        setChaptersKey(chaptersKey + 1)
    }

    // обработчик удаления курса
    const handleDelete = async() => {

        // проверка на наличие разделов у курса
        if (chapters.length === 0){
            await courseDelete({course_id: selectedCourse.value})         //функция удаления
            setCourseEnebled(false)                                 //убираем получение курса
            setCourseKey(courseKey + 1)                             //обновляем получение курса уже без его получния 
            setSelectedCourse(null)                                 //присваиваем валью селекта нулю
            setCoursesKey(coursesKey + 1)                           //обновляем курсы и селект
            // setChaptersEnebled(false)
        } else {
            alert("Спочатку необхідно видалити розділи курсу")
        }
    } 

    // создание курса
    const handleCreateCourse = async () => {
        if (courseInput !== ''){
            await createCourse({teacher_id: teacher_id, course_name: courseInput})
            setCourseInput('')
            setCoursesKey(coursesKey + 1)
        } else {
            alert("Поле введення назви курсу порожнє")
        }
    }
    // отлавливание Enter в инпуте для создания курса
    const handleInputEnter = (event) => {
        if (event.key === 'Enter'){
            handleCreateCourse()
        }
    }


    // колбеки для удаления и изменения курса
    const handleChaptersChange = () =>{
        setChaptersKey(chaptersKey + 1)
    }




    return(
        <div className="couDevPage">
            <div className="couDevPage_container">
                <div className="couDevPage_courseDevControl">

                    <div className="couDevPage_courseDevControl_selectCourse">
                        <Select options={courses} onChange={handleSelect} value={selectedCourse}/>
                    </div>

                    <div className="couDevPage_courseDevControl_createCourse">
                        <input type="text" placeholder='Назва предмету' value={courseInput} onChange={(event) => {setCourseInput(event.target.value)}} onKeyDown={handleInputEnter}/>
                        <button onClick={handleCreateCourse}>+ Створити предмет</button>
                    </div>
                </div>

                
                {courseFetching && 
                    <div className="couDevPage_courseName">
                        <div className="couDevPage_courseName_name">{course[0].course_name}</div>

                        <button className="couDevPage_courseName_delete" onClick={handleDelete} ><img src={del} alt="delete" /></button>
                    </div>}


                <div className="couDevPage_chapterList">
                    {chaptersFetching && chapters.map((data, index) => (
                        <Chapter data = {data} isTeacher = {true} key = {index} handleChaptersChange = {handleChaptersChange}></Chapter>
                    ))}
                </div>

                {/* создание раздела */}
                {courseFetching && <Development mode = {"chapter"} course_id = {selectedCourse} handleChaptersChange = {handleChaptersChange}></Development>}
            </div>
        </div>
    )
}

export default CourseDevelopmentPage