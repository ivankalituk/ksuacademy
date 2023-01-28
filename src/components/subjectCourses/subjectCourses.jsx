import './subjectCourses.scss';

import subjectLogo from '../../photos/subjectLogo.svg'

function SubjectCources(){
    return(
        <div className="SubjectCouces">
            <div className="SubjectCouces_container">

                <div className="heading">
                    <div className="heading_logo">
                        <img src={subjectLogo} alt="subjLogo" />
                    </div>

                    <div className="Course_name">
                        <a href='#'>назва курсу</a>
                    </div>
                </div>

                <div className="subThemes">
                    <div className="subThemes_container">
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                        <a href="#">Назва розділу</a>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SubjectCources;