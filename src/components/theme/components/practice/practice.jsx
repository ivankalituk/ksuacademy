import { Link } from 'react-router-dom';
import './practice.scss'

import test from '../../../../assets/photos/Test.svg'

function Practice(){
    return(
        <Link className="practice">
            <div className="practice_img">
                <img src={test} alt="lection" />

            </div>

            <div className="practice_name">Назва практики</div>
        </Link>
    )
}

export default Practice;