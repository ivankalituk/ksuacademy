import './test.scss'

import TestContent from './testContent/testContent'


function Test(){
    return(
        <div className="test">
            <div className="test_heading">Завдання</div>

            <div className="test_content">
                <TestContent></TestContent>
            </div>

            <div className="test_buttons">
                <button>Попереднє</button>
                <button>Наступне</button>
            </div>
        </div>
    )
}

export default Test