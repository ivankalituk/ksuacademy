import './finalTestDevPage.scss'

import TestDev from '../../components/testDev/testDev'
import { useState } from 'react'
import { testCheckFunc } from '../../utils/testCheckFunc'

function FinalTestDevPage(){

    const [test, setTest] = useState([])

    const handleSetTest = (updatedTest) => {
        setTest(updatedTest)
    }

    const handleTestSubmit = () =>{
        if(testCheckFunc(test)){
            console.log("SUBMITED")
        }
    }

    return(
        <div className="finalTestDevPage">
            <div className="finalTestDevPage_container">
                <div className="finalTestDevPage_testDevContainer">
                    <TestDev test ={test} handleSetTest = {handleSetTest} mode = {'theme'}/>
                </div>

                <button onClick={handleTestSubmit}>Зберегти тест</button>
            </div>
        </div>
    )
}

export default FinalTestDevPage