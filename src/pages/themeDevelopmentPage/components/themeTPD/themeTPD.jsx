import './themeTPD.scss'

function ThemeTPD(){
    return(
        <div className="themeTDP">
            <div className="themeTDP_heading">Назва теми</div>

            <div className="themeTDP_education">
                <div className="themeTDP_materialsBlock">
                    <div className="themeTDP_education_heading">Навчальні матеріали</div>

                    <div className="themeTDP_materials_list">
                        <div>MATERIAL</div>
                        <div>MATERIAL</div>
                        <div>MATERIAL</div>
                        <div>MATERIAL</div>
                    </div>
                </div>

                <div className="themeTDP_practiceBlock">
                    <div className="themeTDP_education_heading">Практичні завдання</div>

                    <div className="themeTDP_practice_list">
                        <div>PRACTICE</div>
                        <div>PRACTICE</div>
                        <div>PRACTICE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeTPD