import './themeTP.scss'

import MaterialTP from '../components/materialTP/materialTP';
import PracticeTP from '../components/practiceTP/practiceTP';

function ThemeTP(){
    return(
        <div className="themePage_theme">
            <div className="themePage_theme_heading">Назва теми</div>

            <div className="themePage_theme_education">
                <div className="themePage_theme_materialsBlock">
                    <div className="themePage_theme_education_heading">Навчальні матеріали</div>

                    <div className="themePage_theme_materials_list">
                        <MaterialTP></MaterialTP>
                        <MaterialTP></MaterialTP>
                        <MaterialTP></MaterialTP>
                    </div>
                </div>

                <div className="themePage_theme_practiceBlock">
                    <div className="themePage_theme_education_heading">Практичні завдання</div>

                    <div className="themePage_theme_practice_list">
                        <PracticeTP></PracticeTP>
                        <PracticeTP></PracticeTP>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeTP;