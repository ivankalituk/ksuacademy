import './progressBarTP.scss'

function ProgressBarTP(){
    return(
        <div className="progressBar">
            <div className="progressBar_container">
                <div className="progressBar_padding">
                    <div className="progressBar_chapterName">Назва розділу</div>

                    <div className="progressBar_progress">
                        <div className="progressBar_progress_list">

                            <div className="progress_step">
                                <div className="progress_step_title">THEME</div>
                                <div className="progress_step_dot" />
                            </div>

                            <div className="progress_step">
                                <div className="progress_step_title">THEME</div>
                                <div className="progress_step_dot" />
                            </div>

                            <div className="progress_step">
                                <div className="progress_step_title">THEME</div>
                                <div className="progress_step_dot" />
                            </div>

                            <div className="progress_step">
                                <div className="progress_step_title">THEME</div>
                                <div className="progress_step_dot" />
                            </div>

                        </div>

                        {/* <div className="progress_line">
                            <div className="progress_line_line"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ProgressBarTP;