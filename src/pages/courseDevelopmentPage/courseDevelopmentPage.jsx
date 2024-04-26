import  './courseDevelopmentPage.scss'

import Select from 'react-select'

import del from '../../assets/photos/delete.svg'

import Chapter from '../../components/chapter/chapter'
import Development from '../../components/development/development'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import { getAllCoursesByTeacherId, getOneCourse, postCourse, deleteCourse } from '../../api/course'
import { useState } from 'react'

function CourseDevelopmentPage(){

    const [courseInput, setCourseInput] = useState('')                        //Для инпута создания курса
    const [courseKey, setCourseKey] = useState(1)                           //Для обновления курсов
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    // получение предметов по айди препода, взять из редакса
    const teacher_id = 2;

    // получение курсов
    const {data: courses, isFeching: coursesIsFeching} = useFetchRequest({fetchFunc: ()=> getAllCoursesByTeacherId(teacher_id), key: [courseKey]})

    // создание курса
    const {mutatedFunc: createCourseFunc, isFetching: courseCreateIsFeching, data: courseData} = useRequest({fetchFunc: postCourse})

    // получение одного (выбранного) курса
    const {mutatedFunc: getSelecredCourse, isFetching: selectedCourseIsFetching, data: selectedCourse} = useRequest({fetchFunc: getOneCourse})

    // удаление курса
    const {mutatedFunc: deleteCourseFunc, isFetching: deleteCourseIsFetching, data: deleteCourseData} = useRequest({fetchFunc: deleteCourse})

    // генерация опшнов для реакт-селекта
    let courseOptions
    if (coursesIsFeching){ 
        courseOptions = courses.map(data => ({
            value: data.course_id,
            label: data.course_name
        }))
    }

    // обработчик создания курсов
    const handleCreateCourse = () => {
        createCourseFunc({teacher_id: teacher_id, course_name: courseInput})
        alert(`Курс ${courseInput} успішно створено`)
        setCourseInput('')
        setCourseKey(courseKey+1)
    }
    
    // сохранение выбора реакт-селекта
    const handleCourseSelect = (selectedOption) =>{
        setSelectedCourseId(selectedOption.value)
        console.log(selectedOption.value)

        // получение одного, текущего курса
        getSelecredCourse({course_id: selectedOption.value})
        console.log(selectedCourse)

        // вывести все разделы этого курса
    }

    // удаление курса
    const handleDeleteCourse = () => {
        console.log(`удаление курса с айди: ${selectedCourseId}`)
        deleteCourseFunc({course_id: selectedCourseId})
        setCourseKey(courseKey+1)

        // убрать название курса и удаление
    }

    // создание разделов курса



    return(
        <div className="couDevPage">
            <div className="couDevPage_container">
                <div className="couDevPage_courseDevControl">

                    <div className="couDevPage_courseDevControl_selectCourse">
                        <Select options={courseOptions} onChange={handleCourseSelect} />
                    </div>

                    <div className="couDevPage_courseDevControl_createCourse">
                        <input type="text" placeholder='Назва предмету' onChange={(event) => {setCourseInput(event.target.value)}} value={courseInput}/>
                        <button onClick={handleCreateCourse}>+ Створити предмет</button>
                    </div>
                </div>

                
                {selectedCourseIsFetching && 
                    <div className="couDevPage_courseName">
                        <div className="couDevPage_courseName_name">{selectedCourse[0].course_name}</div>

                        <button className="couDevPage_courseName_delete" onClick={handleDeleteCourse}><img src={del} alt="delete" /></button>
                    </div>}


                <div className="couDevPage_chapterList">
                    {/* <Chapter isTeacher = {true}></Chapter>
                    <Chapter isTeacher = {true}></Chapter>
                    <Chapter isTeacher = {true}></Chapter> */}
                </div>

                <Development mode = {"chapter"}></Development>
            </div>
        </div>
    )
}

export default CourseDevelopmentPage