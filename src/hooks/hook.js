import { useEffect, useState } from "react"

export const useFetchRequest = ({fetchFunc, key, enebled, reactSelect}) => {

    const [data, setData] = useState(null)
    const [isFetching, setIsFecching] = useState(false)

    useEffect(() =>{

        if (enebled) {
            fetchFunc().then((fechedData) => {

                if (reactSelect){
                    const courseOptions = fechedData.map(data => ({
                            value: data.course_id,
                            label: data.course_name
                        }))
                    
                    setData(courseOptions)
                } else {
                    setData(fechedData)
                    setIsFecching(true)
                    console.log(fechedData)
                }
            })
        }
    }, key)

    return {data, isFetching}
}

export const useRequest = ({fetchFunc}) =>{
    const[data, setData] = useState(null)
    const[isFetching, setIsFetching] = useState(false)

    const mutatedFunc = (data) => fetchFunc(data).then((fechedData) =>{
        setData(fechedData)
        setIsFetching(true)
    })

    return {mutatedFunc, isFetching, data}
}