import { Link } from "react-router-dom"

import './chapterCDP.scss'

import chapterImg from '../../../../assets/photos/sampleChapterLogo.svg'
import del from  '../../../../assets/photos/delete.svg'

function ChapterCDP(){
    return(
        <div className="chapterCDP">
            <div className="chapterCDP_header">
                <div className="chapterCDP_header_logo">
                    <img src={chapterImg} alt="chapterLogo" />
                </div>

                <div className="chapterCDP_header_heading">
                    <Link to={"/courseDevelopment/themeDevelopment"} className='chapterCDP_header_heading_name'>Назва розділу</Link>

                    <button className="chapterCDP_header_heading_del">
                        <img src={del} alt="delete" />
                    </button>
                </div>
            </div>

            <div className="chapterCDP_themes">
                <Link to={"/courseDevelopment/themeDevelopment"}>Назва теми</Link>
                <Link to={"/courseDevelopment/themeDevelopment"}>Назва теми</Link>
                <Link to={"/courseDevelopment/themeDevelopment"}>Назва теми</Link>
                <Link to={"/courseDevelopment/themeDevelopment"}>Назва теми</Link>
                <Link to={"/courseDevelopment/themeDevelopment"}>Назва теми</Link>
            </div>
        </div>
    )
}

export default ChapterCDP