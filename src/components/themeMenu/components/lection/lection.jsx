import './lection.scss'

import lectionvideo from '../../../../photos/lectionVideo.svg'
import lectionText from '../../../../photos/lectionText.svg'

function Lection(){
    return(
        <a className="lection" href='#'>
            <div className="lection_container">
                <div className="lection_type">
                    <img src={lectionvideo} alt="lectionType" />
                </div>

                <h5>Навза лекції</h5>
            </div>



        </a>

        
    )
}

export default Lection;