import { Link, useParams } from 'react-router-dom';
import './material.scss'

import lection from '../../../../assets/photos/lection.svg'


function Material(props){
    const {course_id, chapter_id} = useParams()
    const theme_id = props.theme_id
    console.log('MAT', props.theme_id)
    // Поменять ссылку для редактирования лекции

    return(
        <Link className="material" to={(props.role === 'student')? `/course/${course_id}/chapter/${chapter_id}/theme/${theme_id}/lection/${props.data.lection_id}` : `/courseDevelopment/${course_id}/themeDevelopment/${chapter_id}/lectionDevelopment/${theme_id}/${props.data.lection_id}`}>
            <div className="material_img">
                <img src={lection} alt="lection" />
            </div>

            <div className="material_name">{props.data.lection_name}</div>
        </Link>
    )
}

export default Material;