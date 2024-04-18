import { Link } from 'react-router-dom';
import './materialTP.scss'

import lection from '../../../../../assets/photos/lection.svg'

function MaterialTP(){
    return(
        <Link className="themePage_theme_material">
            <div className="theme_material_img">
                <img src={lection} alt="lection" />

            </div>

            <div className="theme_material_name">Назва лекції</div>
        </Link>
    )
}

export default MaterialTP;