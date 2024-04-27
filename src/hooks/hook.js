import { useEffect, useState } from "react"

export const useFetchRequest = ({fetchFunc, key, enebled}) => {

    const [data, setData] = useState(null)
    const [isFetching, setIsFecching] = useState(false)

    useEffect(() =>{

        if (enebled) {
            fetchFunc().then((fechedData) => {
                setData(fechedData)
                setIsFecching(true)
                console.log(fechedData)
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