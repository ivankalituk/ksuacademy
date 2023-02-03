import SubjectCourses from "../../components/subjectCourses/subjectCourses.jsx"

import './coursesPage.scss'

function coursesPage(){
    return(
        <div className="coursesPage">
            <div className="content">
                <div className="content_container">
                    <div className="content_header">Назва предмету</div>
                    
                    <div className="subjects">
                        <SubjectCourses></SubjectCourses>
                        <SubjectCourses></SubjectCourses>
                        <SubjectCourses></SubjectCourses>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default coursesPage;