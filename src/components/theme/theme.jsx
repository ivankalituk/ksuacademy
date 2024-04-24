import './theme.scss'

import Material from './components/material/material'
import Practice from './components/practice/practice'

import del from '../../assets/photos/delete.svg'

import { Link } from 'react-router-dom'

function Theme(props){
    return(
        <div className="theme">
            <div className="theme_heading">
                <div className="theme_heading_name">{props.data.theme_name}</div>

                <button className="theme_heading_delete" style={(props.role === 'student')? {display: 'none'}: {}}>
                    <img src={del} alt="delete" />
                </button>
            </div>

            <div className="theme_education">
                <div className="theme_materialsBlock">
                    <div className="theme_education_heading">Навчальні матеріали</div>

                    <div className="theme_materials_list">
                        <Material></Material>
                        <Material></Material>
                        <Material></Material>
                        <Material></Material>
                        
                        <Link className="theme_material_create" style={(props.role === 'student')? {display: 'none'}: {}}>+ Створити лекцію</Link>
                    </div>
                </div>

                <div className="theme_practiceBlock">
                    <div className="theme_education_heading">Практичні завдання</div>

                    <div className="theme_practice_list">
                        <Practice></Practice>
                        <Practice></Practice>

                        <div className="theme_practice_create" style={(props.role === 'student')? {display: 'none'}: {}}>+ Створити тест</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme