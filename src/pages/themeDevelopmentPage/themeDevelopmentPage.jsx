import './themeDevelopmentPage.scss'

import Theme from '../../components/theme/theme'

function ThemeDevelopmentPage(){
    return(
        <div className="themeDevPage">
            <div className="themeDevPage_container">

                <div className="themeDevPage_themeList">
                    <Theme></Theme>
                </div>
                
                <div className="themeDevPage_createTheme">
                    <div className="themeDevPage_createTheme_heading">Створення теми</div>

                    <div className="themeDevPage_createTheme_createGroup">
                        <input type="text" placeholder='назва теми'/>

                        <button>+ Створити тему</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThemeDevelopmentPage