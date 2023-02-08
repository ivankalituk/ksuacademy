import './themeMenu.scss'

import Lection from './components/lection/lection';
import Test from './components/test/test';


function ThemeMenu(){


    return(
        <div className="themeMenu">
            <div className="theme_container">
                <h4>Створоення репозиторію</h4>

                <div className="content_container">
                    <div className="lections">
                        <span>Навчальні мітеріали</span>
                        <div className="lections_container">
                            <Lection></Lection>
                            <Lection></Lection>
                            <Lection></Lection>
                        </div>
                    </div>

                    <div className="practice">
                        <span className="practice_heading">Практичні завдання</span>
                        <div className="practice_container">
                            <Test></Test>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default ThemeMenu;