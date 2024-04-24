import './themePage.scss'

import Theme from '../../components/theme/theme';
import ProgressBarTP from './components/progressBarTP/progressBarTP';

import { Link, useParams } from 'react-router-dom';

import testCat from '../../assets/photos/testCat.png'
import { useFetchRequest } from '../../hooks/hook';
import { getThemesByChapterId } from '../../api/theme';

function ThemePage(){

    const {chapter_id} = useParams()

    // получение данных про темы
    const {data: themes, isFeching: themesIsFeching} = useFetchRequest({fetchFunc: () => getThemesByChapterId(chapter_id), key: []})
    console.log(themes)
    return(
        <div className="themePage">


            {/* в прогресс бар скинуть данные про раздел */}
            <ProgressBarTP></ProgressBarTP>

            <div className="themePage_container">
                <div className="themePage_padding">

                    <div className="themePage_themeList">
                        {themesIsFeching && themes.map((data, index) => (
                            <Theme role = {'student'} data = {data} key = {index}></Theme>
                        ))}

                    </div>

                    <div className="themePage_finalTest">
                        <div className="themePage_finalTest_heading">Заліковий тест</div>

                        <div className="themePage_finalTest_themes">
                            <div className="themePage_finalTest_themes_heading">Загальний тест по розділамм:</div>

                            <div className="themePage_finalTest_themesList">
                                <Link href="">Назва теми</Link>
                                <Link href="">Назва теми</Link>
                            </div>
                        </div>
                        
                        <Link>Почати тест</Link>

                        <img src={testCat} alt="testCat" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemePage;