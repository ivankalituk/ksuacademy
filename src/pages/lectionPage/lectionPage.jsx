import { useParams } from 'react-router-dom'
import './lectionPage.scss'
import { useFetchRequest } from '../../hooks/hook'
import { getOneLection } from '../../api/lection'

import Test from '../../components/test/test'
import { getLectionTest } from '../../api/lectionTest'

function LectionPage(){

    const {lection_id} = useParams()

    //получение лекции
    const {data: lection, isFetching: lectionFetching} = useFetchRequest({fetchFunc: ()=> getOneLection({lection_id: lection_id}), enebled: true, key: []})

    //получение теста
    const {data: questions, isFetching: testFetching} = useFetchRequest({fetchFunc: ()=> getLectionTest({lection_id: lection_id}), enebled: true, key: []})

    return(
        <div className="lectionPage">
            <div className="lectionPage_container">
                {lectionFetching && <div dangerouslySetInnerHTML={{ __html: lection[0]?.lection_content || '' }} />}

                {testFetching && <Test mode = {1} fetchedQuestions={questions}/>}

            </div>
        </div>
    )
}

export default LectionPage