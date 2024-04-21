import './themePage.scss'

import Theme from '../../components/theme/theme';
import ProgressBarTP from './components/progressBarTP/progressBarTP';

import { Link } from 'react-router-dom';

import testCat from '../../assets/photos/testCat.png'

function ThemePage(){
    return(
        <div className="themePage">

            <ProgressBarTP></ProgressBarTP>

            <div className="themePage_container">
                <div className="themePage_padding">

                    <div className="themePage_themeList">
                        <Theme role = {'student'}></Theme>
                        <Theme role = {'student'}></Theme>
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