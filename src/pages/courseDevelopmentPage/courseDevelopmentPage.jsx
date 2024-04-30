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

    const [courseInput, setCourseInput] = useState('')                          //Для инпута создания курса
    const [courseKey, setCourseKey] = useState(1)                               //Для обновления курсов


    const [chosenCourseId, setChosenCourseId] = useState(null)                  //сохранение выбранного айди курса
    const [chosenCourseKey, setChosenCourseKey] = useState(0)                   //ключ для обновления получения одного курса
    const [enebledChosenCourse, setEnebledChosenCourse] = useState(false)       //енейблед для получения одного курса

    const [chapterKey, setChapterKey] = useState(0)                             //ключ для разделов
    const [chapterEnebled, setChapterEnebled] = useState(false)                 //енейблед для разделов




    // получение предметов по айди препода, взять из редакса
    const teacher_id = 2;
    // получение курсов
    const {data: courses, isFetching: coursesIsFetching} = useFetchRequest({fetchFunc: ()=> getAllCoursesByTeacherId(teacher_id), key: [courseKey], enebled: true, mutationFunc: dataToOptions })

    // создание курса
    const {mutatedFunc: createCourseFunc, isFetching: courseCreateIsFeching, data: courseData} = useRequest({fetchFunc: postCourse})

    // получение одного (выбранного) курса
    const {data: chosenCourse, isFetching: chosenCourseIsFetching} = useFetchRequest({fetchFunc: ()=> getOneCourse(chosenCourseId), key: [chosenCourseKey], enebled: enebledChosenCourse})
   
    // удаление курса
    const {mutatedFunc: deleteCourseFunc, isFetching: deleteCourseIsFetching, data: deleteCourseData} = useRequest({fetchFunc: deleteCourse})

    // получение разделов курса
    const {data: chapters, isFetching: chaptersIsFetching} = useFetchRequest({fetchFunc: ()=> getChaptersByCourseId(chosenCourseId), key: [chapterKey], enebled: chapterEnebled})

    // обработчик создания курсов
    const handleCreateCourse = () => {
        if (courseInput !== ''){
            createCourseFunc({teacher_id: teacher_id, course_name: courseInput})
            alert(`Курс ${courseInput} успішно створено`)
            setCourseInput('')
            setCourseKey(courseKey+1)
        } else{
            alert('Назва курсу порожня')
        }
    }

    // функция для создания предмета по клику Enter в input
    const hadleEnterInput = (event) =>{
        if (event.key === 'Enter'){
            handleCreateCourse()
        }
    }
    
    // сохранение выбора реакт-селекта
    const handleCourseSelect = (selectedOption) =>{

        // получение одного курса
        setChosenCourseId({course_id: selectedOption.value})
        setEnebledChosenCourse(true)
        setChosenCourseKey(chosenCourseKey+1)

        // получение курсов
        setChapterEnebled(true)
        setChapterKey(chapterKey+1)
        console.log(chapters)
    }

    //удаление курса ТОЛЬКО если в нём нет разделов
    const handleDeleteCourse = () => {


        if (chapters.length >0){
            alert("Для початку необхідно відалити всі розділи курсу")
        } else {
            console.log(`удаление курса с айди: ${chosenCourseId}`)
            deleteCourseFunc({course_id: chosenCourseId.course_id})
            setCourseKey(courseKey+1)
    
            setEnebledChosenCourse(false)
            setChosenCourseId(null)
            setChosenCourseKey(chosenCourseKey+1)
        }
    }


    // console.log(courses)

    return(
        <div className="couDevPage">
            <div className="couDevPage_container">
                <div className="couDevPage_courseDevControl">

                    <div className="couDevPage_courseDevControl_selectCourse">
                        <Select options={courses} onChange={handleCourseSelect} />
                    </div>

                    <div className="couDevPage_courseDevControl_createCourse">
                        <input type="text" placeholder='Назва предмету' onKeyDown={hadleEnterInput} onChange={(event) => {setCourseInput(event.target.value)}} value={courseInput}/>
                        <button onClick={handleCreateCourse}>+ Створити предмет</button>
                    </div>
                </div>

                
                {chosenCourse && 
                    <div className="couDevPage_courseName">
                        <div className="couDevPage_courseName_name">{chosenCourse[0].course_name}</div>

                        <button className="couDevPage_courseName_delete" onClick={handleDeleteCourse}><img src={del} alt="delete" /></button>
                    </div>}


                <div className="couDevPage_chapterList">
                    {chaptersIsFetching && chapters.map((data, index) => (
                        <Chapter data = {data} isTeacher = {true} key = {index}></Chapter>
                    ))}
                </div>

                {/* создание раздела */}
                {chosenCourseId && <Development mode = {"chapter"} course_id = {chosenCourseId.course_id}></Development>}
            </div>
        </div>
    )
}

export default CourseDevelopmentPage