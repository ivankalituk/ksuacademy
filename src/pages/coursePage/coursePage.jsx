import './coursePage.scss'

import Chapter from '../../components/chapter/chapter';
import { useParams } from 'react-router-dom';
import { useFetchRequest } from '../../hooks/hook';
import { getOneCourse } from '../../api/course';
import { getChaptersByCourseId } from '../../api/chapter';

function CoursePage(){
    
    const {course_id} = useParams()

    const {data: course, isFetching: courseIsFetching} = useFetchRequest({fetchFunc: () => getOneCourse({course_id: course_id}), key: [], enebled: true})
    const {data: chapters, isFetching: chaptersIsFetching} = useFetchRequest({fetchFunc: () => getChaptersByCourseId({course_id: course_id}), key: [], enebled: true})
    // console.log(course_id)
    return(
        <div className="coursePage">
            <div className="coursePage_container">
                {courseIsFetching && <div className="coursePage_courseName">{course[0].course_name}</div>}
                
                <div className="coursePage_courses">
                    {chaptersIsFetching && chapters.map((data, index) => (
                        <Chapter isTeacher = {!false} data = {data} key = {index}></Chapter>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CoursePage;