import { Link } from 'react-router-dom';
import './material.scss'

import lection from '../../../../assets/photos/lection.svg'


function Material(props){

    // поменять ссылки

    return(
        <Link className="material">
            <div className="material_img">
                <img src={lection} alt="lection" />

            </div>

            <div className="material_name">{props.data.lection_name}</div>
        </Link>
    )
}

export default Material;