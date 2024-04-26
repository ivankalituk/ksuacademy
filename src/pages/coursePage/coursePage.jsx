import './coursePage.scss'

import Chapter from '../../components/chapter/chapter';
import { useParams } from 'react-router-dom';
import { useFetchRequest } from '../../hooks/hook';
import { getOneCourse } from '../../api/course';
import { getChaptersByCourseId } from '../../api/chapter';

function CoursePage(){
    
    const {course_id} = useParams()

    const {data: course, isFeching: courseIsFeching} = useFetchRequest({fetchFunc: () => getOneCourse(course_id), key: []})

    const {data: chapters, isFeching: chaptersIsFeching} = useFetchRequest({fetchFunc: () => getChaptersByCourseId(course_id), key: []})

    return(
        <div className="coursePage">
            <div className="coursePage_container">
                {courseIsFeching && <div className="coursePage_courseName">{course[0].course_name}</div>}
                
                <div className="coursePage_courses">
                    {chaptersIsFeching && chapters.map((data, index) => (
                        <Chapter isTeacher = {!false} data = {data} key = {index}></Chapter>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CoursePage;