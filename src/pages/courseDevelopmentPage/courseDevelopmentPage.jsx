import  './courseDevelopmentPage.scss'

import Select from 'react-select'

import del from '../../assets/photos/delete.svg'
import edit from '../../assets/photos/edit.svg'
import sampleCoursePhoto from '../../assets/photos/courseSampleAvatar.svg'
import addPhoto from '../../assets/photos/addPhoto.svg'

import Chapter from '../../components/chapter/chapter'
import Development from '../../components/development/development'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import { getAllCoursesByTeacherId, getOneCourse, postCourse, deleteCourse, updateCourse } from '../../api/course'
import { useState } from 'react'
import { getChaptersByCourseId } from '../../api/chapter'
import { dataToOptions } from '../../utils/mutationFunctions'

function CourseDevelopmentPage(){
    // получение всех разделов преподавателя
    const teacher_id = 2;

    const [coursesKey, setCoursesKey] = useState(1)                     //ключ для обновления курсов

    const [courseKey, setCourseKey] = useState(1)                       //ключ для обновления одного курса
    const [courseEnebled, setCourseEnebled] = useState(false)           //значение для начала получения курса
    const [selectedCourse, setSelectedCourse] = useState(null)          //ключ для получения курса

    const [courseInput, setCourseInput] = useState('')                  //для инпута курсов

    const [chaptersKey, setChaptersKey] = useState(1)                   //ключ получения разделов 
    const [chaptersEnebled, setChaptersEnebled] = useState(false)       //значение для начала получения данных

    const [courseEdit, setCourseEdit] = useState(false)                 //для отображения инпута изменения названия курса
    const [courseEditInput, setCourseEditInput] = useState('')          //для сохранения текста в инпуте

    const [selectedFile, setSelectedFile] = useState(null)                  //для сохранения ФАЙЛА фото курса
    const [selectedCoursePhoto, setSelectedCoursePhoto] = useState(null)    //для сохранения ссылки на фото курса

    // получение всех курсов преподавателя
    const {data: courses} = useFetchRequest({fetchFunc: ()=> getAllCoursesByTeacherId(teacher_id), enebled: true, mutationFunc: dataToOptions, key: [coursesKey]})

    // получение одного, выбранного курса
    const {data: course, isFetching: courseFetching} = useFetchRequest({fetchFunc: () => getOneCourse({course_id: selectedCourse.value}), enebled: courseEnebled, key: [courseKey]}) 

    //запрос на удаление выбранного курса
    const {mutatedFunc: courseDelete} = useRequest({fetchFunc: deleteCourse})

    //запрос для создания курса
    const {mutatedFunc: createCourse} = useRequest({fetchFunc: postCourse})

    // получение всех разделов курса
    const {data: chapters, isFetching: chaptersFetching} = useFetchRequest({fetchFunc: ()=> getChaptersByCourseId({course_id: selectedCourse.value}), enebled: chaptersEnebled, key: [chaptersKey]})

    // изменение названия курса
    const {mutatedFunc: changeCourse} = useRequest({fetchFunc: updateCourse})


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
            await courseDelete({course_id: selectedCourse.value})   //функция удаления
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

    // изменение названия курса
    // переделать на побобие изменение курса
    const handleEnterEdit = async (event) => {

        if (event.key === 'Enter'){
            if (courseEditInput !== '' || selectedFile !== null){
                
                const data = new FormData()
                data.append('course_id', course[0].course_id)
                
                if(courseEditInput !== ''){
                    data.append('course_name', courseEditInput)
                } else {
                    data.append('course_name', course[0].course_name)
                }

                if(selectedFile !== null){
                    data.append('photo', selectedFile)
                }

                await changeCourse(data)
                
                setCourseEditInput('')

                //получение изменённого текущего курса и опшнов
                setCourseKey(courseKey + 1)
                setCoursesKey(coursesKey + 1)
            } else {
                alert('Поле вводу назви нового курсу порожнє')
            }
        }
    }

    // изменение фото курса
    const handleImgChange = async (event) => {
        const file = event.target.files[0]
        setSelectedFile(file)
        const reader = new FileReader()

        reader.onload = () => {
            setSelectedCoursePhoto(reader.result)
        }

        reader.readAsDataURL(file)
        console.log(1)
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
                        <div className="couDevPage_courseName_photo">
                            {course[0].img_path? (selectedCoursePhoto? <img src={selectedCoursePhoto} alt="courseLogo" /> : <img src={'http://localhost:1000/' + course[0].img_path} alt="courseLogo" />) : (selectedCoursePhoto? <img src={selectedCoursePhoto} alt="courseLogo" /> : <img src={sampleCoursePhoto} alt="courseLogo" />)}
                            {/* <img src={sampleCoursePhoto} alt="course_photo" /> */}
                            
                            {courseEdit && <div className="couDevPage_courseName_photo_edit">
                                <img src={addPhoto} alt="addPhoto" />
                                <input type="file" onChange={handleImgChange} />
                            </div>}

                        </div>

                        {!courseEdit && <div className="couDevPage_courseName_name">{course[0].course_name}</div>}
                        
                        {courseEdit && <input type='text' className="couDevPage_courseName_input" placeholder='Нова назва предмету' onChange={(event)=>{setCourseEditInput(event.target.value)}} value={courseEditInput} onKeyDown={handleEnterEdit}></input>}

                        <button className="couDevPage_courseName_delete" onClick={handleDelete} ><img src={del} alt="delete" /></button>
                        <button className="couDevPage_courseName_edit"> <img src={edit} alt="edit" onClick={()=> {setCourseEdit(!courseEdit)}}/></button>
                    </div>}


                <div className="couDevPage_chapterList">
                    {chaptersFetching && chapters.map((data, index) => (
                        <Chapter chapter_id = {data.chapter_id} course_id = {data.course_id}isTeacher = {true} key = {index} handleChaptersChange = {handleChaptersChange}></Chapter>
                    ))}
                </div>

                {/* создание раздела */}
                {courseFetching && <Development mode = {"chapter"} course_id = {selectedCourse} handleChaptersChange = {handleChaptersChange}></Development>}
            </div>
        </div>
    )
}

export default CourseDevelopmentPage