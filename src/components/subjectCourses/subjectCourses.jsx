import './subjectCourses.scss';

import subjectLogo from '../../photos/subjectLogo.svg'
import { Link } from 'react-router-dom';

function SubjectCources(){
    return(
        <div className="SubjectCouces">
            <div className="SubjectCouces_container">

                <div className="heading">
                    <div className="heading_logo">
                        <img src={subjectLogo} alt="subjLogo" />
                    </div>

                    <div className="Course_name">
                        <Link to='/courses'>назва курсу</Link>
                    </div>
                </div>

                <div className="subThemes">
                    <div className="subThemes_container">
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                        <Link to="/chapter">Назва розділу</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SubjectCources;