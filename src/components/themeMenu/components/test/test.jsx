import './test.scss'

import test from '../../../../photos/test.svg'

function Test(){
    return(
        <div className="test">
            <div className="test_container">
                <div className="text_heading">
                    <div className="test_type">
                        <img src={test} alt="lectionType" />
                    </div>
                    
                    <div className="test_info">
                        <h5>Навза тесту</h5>
                        <span className="questions_num">12 питань</span>
                    </div>
                </div>

                <a href="#">Практичне завдання</a>

            </div>



        </div>

        
    )
}

export default Test;