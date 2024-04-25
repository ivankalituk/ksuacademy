import  './courseDevelopmentPage.scss'

import Select from 'react-select'

import del from '../../assets/photos/delete.svg'

import Chapter from '../../components/chapter/chapter'
import Development from '../../components/development/development'
import { useFetchRequest, useRequest } from '../../hooks/hook'
import { getAllCoursesByTeacherId, postCourse } from '../../api/course'
import { useState } from 'react'

function CourseDevelopmentPage(){

    // тут ошибка так как я ничего не передаю Чаптерам

    // получение предметов по айди препода, взять из редакса
    const theacher_id = 2;

    const {data: courses, isFeching: coursesIsFeching} = useFetchRequest({fetchFunc: ()=> getAllCoursesByTeacherId(theacher_id), key: []})
    console.log(courses)

    let courseOptions

    if (coursesIsFeching){
        courseOptions = courses.map(data => ({
            value: data.course_id,
            label: data.course_name
        }))
    }

    const handleCreateCourse = () => {
        // let {data: coursePost} = useRequest({fetchFunc: () => postCourse('gay', theacher_id)})
        console.log(coursePost)
    }

    return(
        <div className="couDevPage">
            <div className="couDevPage_container">
                <div className="couDevPage_courseDevControl">

                    <div className="couDevPage_courseDevControl_selectCourse">
                        <Select options={courseOptions}/>
                    </div>

                    <div className="couDevPage_courseDevControl_createCourse">
                        <input type="text" placeholder='Назва предмету'/>
                        <button>+ Створити предмет</button>
                    </div>
                </div>

                <div className="couDevPage_courseName">
                    <div className="couDevPage_courseName_name">Назва курсу</div>

                    <button className="couDevPage_courseName_delete"><img src={del} alt="delete" /></button>
                </div>

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