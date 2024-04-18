import { Link } from 'react-router-dom';
import './practiceTP.scss'

import lection from '../../../../../assets/photos/Test.svg'

function PracticeTP(){
    return(
        <Link className="themePage_theme_practice">
            <div className="theme_practice_img">
                <img src={lection} alt="lection" />

            </div>

            <div className="theme_practice_name">Назва лекції</div>
        </Link>
    )
}

export default PracticeTP;