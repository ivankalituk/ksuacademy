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



    return(
        <div className="couDevPage">
            <div className="couDevPage_container">
                <div className="couDevPage_courseDevControl">

                    <div className="couDevPage_courseDevControl_selectCourse">
                        <Select />
                    </div>

                    <div className="couDevPage_courseDevControl_createCourse">
                        <input type="text" placeholder='Назва предмету' />
                        <button >+ Створити предмет</button>
                    </div>
                </div>

                
                {1 && 
                    <div className="couDevPage_courseName">
                        <div className="couDevPage_courseName_name">NAME</div>

                        <button className="couDevPage_courseName_delete" ><img src={del} alt="delete" /></button>
                    </div>}


                <div className="couDevPage_chapterList">
                    {/* {chaptersIsFetching && chapters.map((data, index) => (
                        <Chapter data = {data} isTeacher = {true} key = {index}></Chapter>
                    ))} */}
                </div>

                {/* создание раздела */}
                {1 && <Development mode = {"chapter"} ></Development>}
            </div>
        </div>
    )
}

export default CourseDevelopmentPage