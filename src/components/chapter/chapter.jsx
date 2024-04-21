import { Link } from "react-router-dom"

import './chapter.scss'

import del from '../../assets/photos/delete.svg'
import chapterImg from '../../assets/photos/sampleChapterLogo.svg'

function Chapter(props){
    let link = '/'

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
                    <Link to={link} className='chapter_header_heading_name'>Назва розділу</Link>

                    {props.isTeacher && (                    
                        <button className="chapter_header_heading_del">
                            <img src={del} alt="delete" />
                        </button>
                    )}
                </div>
            </div>

            <div className="chapter_themes">
                <Link to={link}>Назва теми</Link>
                <Link to={link}>Назва теми</Link>
                <Link to={link}>Назва теми</Link>
                <Link to={link}>Назва теми</Link>
                <Link to={link}>Назва теми</Link>
            </div>
        </div>
    )
}

export default Chapter