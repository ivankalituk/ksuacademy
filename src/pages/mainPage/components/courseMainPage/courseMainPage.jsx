import './courseMainPage.scss'

import courseImg from '../../../../assets/photos/courseSampleAvatar.svg'
import courseHeadingTick from '../../../../assets/photos/courseHeadingTick.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CourseMainPage(){

    let [tick, setTick] = useState(false)

    let togleCourse = () => {
        setTick(!tick)
    }

    return(
        <div className="mainPage_courseBlock_course">

            <div className="course_heading">
                <div className="course_heading_img">
                    <img src={courseImg} alt="courseImg" />
                </div>

                <div className="course_heading_container">
                    <Link to={`/course/${'courseNum'}`}>Назва курсу</Link>

                    <div className="course_heading_tick" onClick={togleCourse}>
                        <img src={courseHeadingTick} alt="Tick" className={tick? "rotate" : ""}/>
                    </div>
                </div>
            </div>

            <div className={`course_chapters ${tick? 'show' : ''}`}>
                <div className="course_chapters_container">
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва розділу</Link>
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва розділу</Link>
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва розділу</Link>
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва розділу</Link>
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва розділу</Link>
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва розділу</Link>
                </div>
            </div>
        </div>
    )
}

export default CourseMainPage