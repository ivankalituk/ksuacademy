import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SubjectCourses from "../../components/subjectCourses/subjectCourses.jsx"

import './coursesPage.scss'

function coursesPage(){
    return(
        <div className="coursesPage">
            <Header></Header>

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

            <Footer></Footer>
        </div>
    )
}

export default coursesPage;