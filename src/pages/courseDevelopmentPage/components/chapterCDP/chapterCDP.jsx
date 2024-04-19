import { Link } from "react-router-dom"

import './chapterCDP.scss'

import chapterImg from '../../../../assets/photos/sampleChapterLogo.svg'

function ChapterCDP(){
    return(
        <div className="chapterCDP">
            <div className="chapterCDP_header">
                <div className="chapterCDP_header_logo">
                    <img src={chapterImg} alt="chapterLogo" />
                </div>

                <div className="chapterCDP_header_heading">
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`} className='chapterCDP_header_heading_name'>Назва розділу</Link>
                </div>
            </div>

            <div className="chapterCDP_themes">
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
                <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`}>Назва теми</Link>
            </div>
        </div>
    )
}

export default ChapterCDP