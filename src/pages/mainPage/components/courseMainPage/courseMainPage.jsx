import './courseMainPage.scss'

import courseImg from '../../../../assets/photos/courseSampleAvatar.svg'
import courseHeadingTick from '../../../../assets/photos/courseHeadingTick.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchRequest } from '../../../../hooks/hook'
import { getChaptersByCourseId } from '../../../../api/chapter'

function CourseMainPage(props){

    const [tick, setTick] = useState(false)

    // открытие, закрытие курса
    const togleCourse = () => {
        setTick(!tick)
    }

    const {data: chapters, isFeching: chaptersIsFeching} = useFetchRequest({fetchFunc: () => getChaptersByCourseId(props.data.course_id),key: []})
    

    return(
        <div className="mainPage_courseBlock_course">

            <div className="course_heading">
                <div className="course_heading_img">
                    <img src={courseImg} alt="courseImg" />
                </div>

                <div className="course_heading_container">
                    <Link to={`/course/${props.data.course_id}`}>{props.data.course_name}</Link>

                    <div className="course_heading_tick" onClick={togleCourse}>
                        <img src={courseHeadingTick} alt="Tick" className={tick? "rotate" : ""}/>
                    </div>
                </div>
            </div>

            <div className={`course_chapters ${tick? 'show' : ''}`}>
                <div className="course_chapters_container">

                    {chaptersIsFeching && chapters.map((data, index) => (
                        <Link to={`/course/${props.data.course_id}/chapter/${data.chapter_id}`} key={index}>{data.chapter_name}</Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CourseMainPage