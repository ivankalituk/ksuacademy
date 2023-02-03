import subj from '../../photos/subjectLogo.svg'
import arrow from '../../photos/arrow.svg'

import './subjectMainPage.css'

import React from 'react';

function SubjectMainPage(){

    const [check, setCheck] = React.useState(true)
    const handleClick = () => setCheck(!check)

    return(
        <div className="subject">
            <div className="subject_container">
                <div className="subject_header">
                    <div className="subject_name">

                        <div className="header_img">
                            <img src={subj} alt="subject" />
                        </div>

                        <a href="#">Назва предмету</a>
                    </div>
                    
                    <div className="custom_check">
                        <input type="checkbox" checked={check} onChange={handleClick}/>
                        <img src={arrow} alt="arrow" className={check? "input_img" : " input_img input_img_active"}/>
                    </div>
                </div>

                <div className={check? "subject_content, active_content": "subject_content"}>
                    <div className="subject_content_container">
                        <a href="#">Розділ</a>
                        <a href="#">Розділ</a>
                        <a href="#">Розділ</a>
                        <a href="#">Розділ</a>
                        <a href="#">Розділ</a>
                        <a href="#">Розділ</a>
                        <a href="#">Розділ</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SubjectMainPage;