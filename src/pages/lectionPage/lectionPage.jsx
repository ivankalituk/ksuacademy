import { useParams } from 'react-router-dom'
import './lectionPage.scss'
import { useFetchRequest } from '../../hooks/hook'
import { getOneLection } from '../../api/lection'

function LectionPage(){

    const {lection_id} = useParams()

    //получение лекции
    const {data: lection, isFetching: lectionFetching} = useFetchRequest({fetchFunc: ()=> getOneLection({lection_id: lection_id}), enebled: true, key: []})
    console.log(lection)

    return(
        <div className="lectionPage">
            <div className="lectionPage_container">
                {lectionFetching && <div dangerouslySetInnerHTML={{ __html: lection[0]?.lection_content || '' }} />}

                
            </div>
        </div>
    )
}

export default LectionPage