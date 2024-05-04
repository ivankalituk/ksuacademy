import './themeDevelopmentPage.scss'

import Theme from '../../components/theme/theme'
import Development from '../../components/development/development'
import { useFetchRequest } from '../../hooks/hook'
import { useParams } from 'react-router-dom'
import { getThemesByChapterId } from '../../api/theme'
import { useState } from 'react'

function ThemeDevelopmentPage(){

    const {chapter_id} = useParams()                            //получение айди раздела

    const [themesKey, setThemesKey] = useState(1)               //ключ для обновления тем

    // получение всех тем раздела
    const {data: themes, isFetching: themesFetching} = useFetchRequest({fetchFunc: () => getThemesByChapterId({chapter_id: chapter_id}), enebled: true, key: [themesKey]})

    // колбек для обновления тем
    const themesKeyCallback = () => {
        setThemesKey(themesKey + 1)
    }


    return(
        <div className="themeDevPage">
            <div className="themeDevPage_container">

                <div className="themeDevPage_themeList">
                    {themesFetching && themes.map((data, index) => (
                        <Theme data = {data} key = {index} role = {'teacher'} themesKeyCallback = {themesKeyCallback}></Theme>
                    ))}
                </div>
                
                <Development mode = {'theme'}></Development>

            </div>
        </div>
    )
}

export default ThemeDevelopmentPage