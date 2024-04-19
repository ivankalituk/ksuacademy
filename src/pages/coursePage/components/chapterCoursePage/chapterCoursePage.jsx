import './chapterCoursePage.scss'

import chapterImg from '../../../../assets/photos/sampleChapterLogo.svg'
import { Link } from 'react-router-dom';

function ChapterCoursePage(){
    return(
        <div className="chapterCP">
            <div className="chapterCP_header">
                <div className="chapterCP_header_logo">
                    <img src={chapterImg} alt="chapterLogo" />
                </div>

                <div className="chapterCP_header_heading">
                    <Link to={`/course/${'courseNum'}/theme/${'themeNum'}`} className='chapterCP_header_heading_name'>Назва розділу</Link>
                </div>
            </div>

            <div className="chapterCP_themes">
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

export default ChapterCoursePage;