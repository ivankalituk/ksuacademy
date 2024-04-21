import { Link } from 'react-router-dom';
import './material.scss'

import lection from '../../../../assets/photos/lection.svg'


function Material(){
    return(
        <Link className="material">
            <div className="material_img">
                <img src={lection} alt="lection" />

            </div>

            <div className="material_name">Назва лекції</div>
        </Link>
    )
}

export default Material;