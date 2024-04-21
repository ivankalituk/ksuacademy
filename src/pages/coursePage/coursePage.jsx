import './coursePage.scss'

import Chapter from '../../components/chapter/chapter';

function CoursePage(){

    return(
        <div className="coursePage">
            <div className="coursePage_container">
                <div className="coursePage_courseName">Назва курсу</div>

                <div className="coursePage_courses">
                    <Chapter isTeacher = {false}></Chapter>
                    <Chapter isTeacher = {false}></Chapter>
                    <Chapter isTeacher = {false}></Chapter>
                    <Chapter isTeacher = {false}></Chapter>
                </div>
            </div>
        </div>
    )
}

export default CoursePage;