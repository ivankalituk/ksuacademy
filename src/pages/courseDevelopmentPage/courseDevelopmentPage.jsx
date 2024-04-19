import  './courseDevelopmentPage.scss'

import Select from 'react-select'

import del from '../../assets/photos/delete.svg'

import ChapterCDP from './components/chapterCDP/chapterCDP'

function CourseDevelopmentPage(){
    return(
        <div className="couDevPage">
            <div className="couDevPage_container">
                <div className="couDevPage_courseDevControl">

                    <div className="couDevPage_courseDevControl_selectCourse">
                        <Select />
                    </div>

                    <div className="couDevPage_courseDevControl_createCourse">
                        <input type="text" placeholder='Назва предмету'/>
                        <button>+ Створити предмет</button>
                    </div>
                </div>

                <div className="couDevPage_courseName">
                    <div className="couDevPage_courseName_name">Назва курсу</div>

                    <button className="couDevPage_courseName_delete"><img src={del} alt="delete" /></button>
                </div>

                <div className="couDevPage_chapterList">
                    <ChapterCDP />

                </div>
            </div>
        </div>
    )
}

export default CourseDevelopmentPage