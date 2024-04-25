import './themeDevelopmentPage.scss'

import Theme from '../../components/theme/theme'
import Development from '../../components/development/development'

function ThemeDevelopmentPage(){
    return(
        <div className="themeDevPage">
            <div className="themeDevPage_container">

                <div className="themeDevPage_themeList">
                    {/* <Theme></Theme> */}
                </div>
                
                <Development mode = {'theme'}></Development>

            </div>
        </div>
    )
}

export default ThemeDevelopmentPage