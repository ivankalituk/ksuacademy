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
                        <Link to='/courses'><h2>назва курсу</h2></Link>
                    </div>
                </div>

                <div className="subThemes">
                    <div className="subThemes_container">
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                        <Link to="/chapter"><h3>Назва розділу</h3></Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SubjectCources;