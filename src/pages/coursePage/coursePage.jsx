import './coursePage.scss'

import ChapterCoursePage from './components/chapterCoursePage/chapterCoursePage';

function CoursePage(){
    return(
        <div className="coursePage">
            <div className="coursePage_courseName">Назва курсу</div>

            <div className="coursePage_courses">
                <ChapterCoursePage></ChapterCoursePage>
                <ChapterCoursePage></ChapterCoursePage>
                <ChapterCoursePage></ChapterCoursePage>
                <ChapterCoursePage></ChapterCoursePage>
            </div>
        </div>
        

    )
}

export default CoursePage;