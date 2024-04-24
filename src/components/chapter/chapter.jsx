import { Link } from "react-router-dom"

import './chapter.scss'

import del from '../../assets/photos/delete.svg'
import chapterImg from '../../assets/photos/sampleChapterLogo.svg'
import { useFetchRequest } from "../../hooks/hook"
import { getThemesByChapterId } from "../../api/theme"

function Chapter(props){

    // получение тем
    const {data: themes, isFeching: themesIsFetching} = useFetchRequest({fetchFunc: () => getThemesByChapterId(props.data.chapter_id), key: []})
    let link = '/'

    console.log(props.data)
    // новые ссылки
    if(props.isTeacher === true){
        link = "/courseDevelopment/themeDevelopment"
    }
    else {
        link = "/course/:subId/theme/:theId"
    }

    return(
        <div className="chapter">
            <div className="chapter_header">
                <div className="chapter_header_logo">
                    <img src={chapterImg} alt="chapterLogo" />
                </div>

                <div className="chapter_header_heading">
                    <Link to={`/course/${props.data.course_id}/chapter/${props.data.chapter_id}`} className='chapter_header_heading_name'>{props.data.chapter_name}</Link>

                    {props.isTeacher && (                    
                        <button className="chapter_header_heading_del">
                            <img src={del} alt="delete" />
                        </button>
                    )}
                </div>
            </div>

            <div className="chapter_themes">
                {themesIsFetching && themes.map((data, index) => (
                    <Link key={index} to={`/course/${props.data.course_id}/chapter/${props.data.chapter_id}`}>{data.theme_name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Chapter